import { Component, inject, OnInit } from '@angular/core';
import { Mt } from '../../interfaces/mt.interface';
import { MtService } from '../../services/mt.service';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../interfaces/item.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MtModalComponent } from '../mt-modal/mt-modal.component';

@Component({
  selector: 'app-mt-list',
  templateUrl: './mt-list.component.html',
  styleUrl: './mt-list.component.css'
})
export class MtListComponent implements OnInit{
  private modalService = inject(NgbModal);

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

            this.mtList.push(res);
          })
          
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

  openModal(mtUrl: string, mt: Mt) {

    const modalRef = this.modalService.open(MtModalComponent);

    this.service.getMove(mtUrl).subscribe(res => {

      modalRef.componentInstance.move = res;
      modalRef.componentInstance.mt = mt
    })
  }
}
