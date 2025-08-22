import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ver-rutina',
  templateUrl: './ver-rutina.component.html',
  styleUrls: ['./ver-rutina.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class VerRutinaComponent implements OnInit {
  // Se inician los datos
  usuario: any = null;
  diasRutina: { dia: string; ejercicios: any[] }[] = [];

  constructor() {}

  ngOnInit() {
    // Obtenieno los datos del localStorage
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    }

    // Se consiguen los dias de la rutina
    const dias = [
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
      'domingo',
    ];

    // Recorremos los datos y guardamos los dias
    dias.forEach((dia) => {
      if (this.usuario[dia]) {
        this.diasRutina.push({
          dia,
          ejercicios: this.usuario[dia],
        });
      }
    });
  }
}
