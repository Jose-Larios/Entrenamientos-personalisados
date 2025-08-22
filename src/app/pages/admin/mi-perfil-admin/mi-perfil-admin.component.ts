import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mi-perfil-admin',
  templateUrl: './mi-perfil-admin.component.html',
  styleUrls: ['./mi-perfil-admin.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class MiPerfilAdminComponent implements OnInit {
  usuario: any = null;

  constructor() {}

  ngOnInit() {
    // Obtenieno los datos del localStorage
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    }
  }
}
