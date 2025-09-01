import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../services/usuarios.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  termino: string = '';
  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.usuariosFiltrados = data; // inicializo la lista
    });
  }

  buscar() {
    console.log('Buscando:', this.termino);
    this.usuariosFiltrados = this.usuarios.filter(u =>
      u.nombre.toLowerCase().includes(this.termino.toLowerCase()) ||
      u.email.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}
