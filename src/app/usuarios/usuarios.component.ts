import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- IMPORTANTE
import { UsuariosService, Usuario } from '../services/usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- formsModule agregado
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario = { nombre: '', email: '' }; // para crear/editar
  editing: boolean = false;

  constructor(private usuariosService: UsuariosService,private location: Location) {}
    // ✅ agregado

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  saveUsuario() {
    if (this.editing) {
      this.usuariosService.actualizarUsuario(this.usuario.id!, this.usuario).subscribe(() => {
        this.resetForm();
        this.loadUsuarios();
      });
    } else {
      this.usuariosService.crearUsuario(this.usuario).subscribe(() => {
        this.resetForm();
        this.loadUsuarios();
      });
    }
  }

  editUsuario(usuario: Usuario) {
    this.usuario = { ...usuario };
    this.editing = true;
  }

  deleteUsuario(id: number) {
    this.usuariosService.eliminarUsuario(id).subscribe(() => {
      this.loadUsuarios();
    });
  }

  resetForm() {
    this.usuario = { nombre: '', email: '' };
    this.editing = false;

    
  }
  // ✅ función para el botón
  volver() {
    this.location.back();
  }
}

