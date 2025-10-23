import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
agregarCliente() {
throw new Error('Method not implemented.');
}
eliminarCliente(arg0: any) {
throw new Error('Method not implemented.');
}
editarCliente(_t12: any) {
throw new Error('Method not implemented.');
}
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(data => {
      console.log(data); // 🔹 para ver si llega información
      this.clientes = data;
    });
  }
}

