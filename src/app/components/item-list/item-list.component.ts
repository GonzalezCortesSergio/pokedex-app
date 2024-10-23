import { Component, inject, OnInit } from '@angular/core';
import { ItemPreview } from '../../interfaces/item.interface';
import { ItemsService } from '../../services/items.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit{


  itemList: ItemPreview[] = [];

  private modalService = inject(NgbModal);
  
  constructor(private service: ItemsService) {}

  getItems(): void {

    this.service.getItems().subscribe(res => {

      this.itemList = res.results;
    })
  }

  ngOnInit(): void {
    this.getItems();
  }

  getImage(item: ItemPreview): string {

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  openModal(arg0: string) {
    
    const modalRef = this.modalService.open(ItemModalComponent, {size: "lg"})

    this.service.getItem(arg0).subscribe(res => {

      modalRef.componentInstance.item = res;
    })
  
  }
  

}
