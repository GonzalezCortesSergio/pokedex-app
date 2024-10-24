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

  getTypeColor(typeName: string): string {

    let background = "background-color: ";

    interface Color {

      [index: string]: string;
    }

    let colores = {
      normal: "#c6c1b9",
      bug: "#8c980f",
      dark: "#3e2d23",
      dragon: "#6f5dc7",
      electric: "#f9bc1a",
      fighting: "#80351a",
      fire: "#f0400a",
      flying: "#94a4ee",
      ghost: "#5d60aa",
      grass: "#72c235",
      ground: "#d1b154",
      ice: "#76d6f4",
      poison: "#934393",
      psychic: "#ee4881",
      rock: "#b6a257",
      steel: "#b5b4c1",
      water: "#2989e7"
    } as Color

    return `${background}${colores[typeName]}`
  }
}
