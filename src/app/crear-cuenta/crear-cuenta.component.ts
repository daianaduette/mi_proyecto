import { Component } from '@angular/core';
import { Location } from '@angular/common';  // ✅ importar Location

@Component({
  selector: 'app-crear-cuenta',
  imports: [],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {
  constructor(private location: Location) {}  // ✅ inyectar Location


  // función para el botón
  volver() {
    this.location.back();
  }
}
