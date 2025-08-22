import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mi-perfil-entrenador',
  templateUrl: './mi-perfil-entrenador.component.html',
  styleUrls: ['./mi-perfil-entrenador.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class MiPerfilEntrenadorComponent implements OnInit {
  usuario: any = null;

  constructor() {}

  ngOnInit() {
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    }
  }
}
