import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsheaderComponent } from './componentsheader/componentsheader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentsheaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ array, aunque sea un solo archivo

})
export class AppComponent {
  title = 'mi_proyecto';
  username: string = '';
  ContadorLetras: number = 0;
  condicion: boolean = false;
  addOne(){
    this.ContadorLetras++; 
  }

  nombre: string[]=['id','nombre'];


}