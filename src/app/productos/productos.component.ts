import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  termino: string = '';

  buscar() {
    console.log('Buscando:', this.termino);
    // para la barra de busqueda
  }
}
