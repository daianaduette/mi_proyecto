import { Component } from '@angular/core';
import { Location } from '@angular/common';  // ✅ importar Location

@Component({
  selector: 'app-quienes-somos',
  imports: [],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  constructor(private location: Location) {}  // ✅ inyectar Location
// función para el botón
volver() {
  this.location.back();
}

}
