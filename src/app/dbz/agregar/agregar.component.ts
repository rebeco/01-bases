import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    console.log(this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo)
    
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
