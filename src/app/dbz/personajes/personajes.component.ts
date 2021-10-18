import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  constructor() {}

  @Input()
  personajes: Personaje[] = [];

  ngOnInit(): void {}
}
