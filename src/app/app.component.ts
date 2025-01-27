import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaisajeComponent } from "./paisaje/paisaje.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaisajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fotografias';
}
