import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsheaderComponent } from './componentsheader/componentsheader.component';
import { BodyComponent } from './components/body/body.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ComponentsheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi_proyecto';
  username: string = 'Paisajes Argentinos';
  ContadorLetras: number = 0;
  condicion: boolean = false;
  addOne(){
    this.ContadorLetras++; 
  }

  nombre: string[]=['id','nombre'];


}