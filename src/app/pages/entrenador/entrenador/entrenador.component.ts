import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.scss'],
  imports: [CommonModule, IonicModule, RouterLink],
})
export class EntrenadorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // Borrar datos al cerrar la sesion
  logout() {
    localStorage.removeItem('usuario');
  }
}
