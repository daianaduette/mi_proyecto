import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  termino: string = '';

  constructor(private location: Location) {} // ✅ agregado

  buscar() {
    console.log('Buscando:', this.termino);
  }

  volver() {
    this.location.back(); // ✅ vuelve a la página anterior
  }
}