import { Component } from '@angular/core';
import { Location } from '@angular/common';  // ✅ importar Location

@Component({
  selector: 'app-personalizados',
  standalone: true,
  imports: [],
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.css']
})
export class PersonalizadosComponent {

  constructor(private location: Location) {}  // ✅ inyectar Location

  // función para el botón
  volver() {
    this.location.back();
  }
}

