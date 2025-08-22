import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss'],
  imports: [CommonModule, IonicModule, RouterLink],
})
export class AdministradorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem('usuario');
  }
}
