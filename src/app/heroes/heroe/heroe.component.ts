import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../app.component.css'],
})
export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 45;

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
}
