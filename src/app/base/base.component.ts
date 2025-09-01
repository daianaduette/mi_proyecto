import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { CommonModule } from '@angular/common'; // para *ngFor y otras directivas

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule], // 🔹 importante para *ngFor
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe({
      next: (data) => this.clientes = data,
      error: (err) => console.error('Error al cargar clientes', err)
    });
  }

  editarCliente(cliente: any) {
    console.log('Editar cliente:', cliente);
  }

  eliminarCliente(id: number) {
    console.log('Eliminar cliente con ID:', id);
  }

  agregarCliente() {
    console.log('Agregar nuevo cliente');
  }
}
