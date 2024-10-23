import { Component, OnInit } from '@angular/core';
import { Mt } from '../../interfaces/mt.interface';
import { MtService } from '../../services/mt.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-mt-list',
  templateUrl: './mt-list.component.html',
  styleUrl: './mt-list.component.css'
})
export class MtListComponent implements OnInit{

  mtList: Mt[] = [];

  constructor(private service: MtService, private itemService: ItemsService) {}

  getMtList(): void {

    this.service.getMts().subscribe(res => {

      res.results.forEach((mt, index)=> {

        this.service.getMt(mt.url).subscribe(res => {

          this.itemService.getItem(res.item.url).subscribe(item => {

            res.itemRes = item;
          })

          this.service.getMove(res.move.url).subscribe(move => {

            res.moveRes = move;
          })
          this.mtList.push(res);
        })
      })
    })
  }

  capitalizeFirstLetter(string: string): string {

    return String(string[0]).toUpperCase() + String(string).slice(1);
  }

  ngOnInit(): void {
      this.getMtList();

      console.log(this.mtList)
  }
}
