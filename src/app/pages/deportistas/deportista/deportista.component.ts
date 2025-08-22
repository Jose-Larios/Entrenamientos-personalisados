import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-deportista',
  templateUrl: './deportista.component.html',
  styleUrls: ['./deportista.component.scss'],
  imports: [CommonModule, IonicModule, RouterLink],
})
export class DeportistaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem('usuario');
  }
}
