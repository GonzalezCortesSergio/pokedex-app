import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Move, MoveRes, Mt } from '../../interfaces/mt.interface';

@Component({
  selector: 'app-mt-modal',
  templateUrl: './mt-modal.component.html',
  styleUrl: './mt-modal.component.css'
})
export class MtModalComponent {
capitalizeFirstLetter(string: string) {
  return String(string[0]).toUpperCase() + String(string).slice(1);
}

  activeModal = inject(NgbActiveModal);

  @Input()
  move!: MoveRes;

  @Input()
  mt!:Mt;
}
