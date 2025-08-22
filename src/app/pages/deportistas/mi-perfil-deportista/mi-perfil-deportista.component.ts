import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mi-perfil-deportista',
  templateUrl: './mi-perfil-deportista.component.html',
  styleUrls: ['./mi-perfil-deportista.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class MiPerfilDeportistaComponent implements OnInit {
  usuario: any = null;

  constructor() {}

  ngOnInit() {
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    }
  }
}
