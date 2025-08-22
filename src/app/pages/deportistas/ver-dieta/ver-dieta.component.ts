import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DeportistaService } from 'src/app/services/deportista';

@Component({
  selector: 'app-ver-dieta',
  templateUrl: './ver-dieta.component.html',
  styleUrls: ['./ver-dieta.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class VerDietaComponent implements OnInit {
  usuario: any = null;
  recetas: any = [];

  constructor(private deportistaService: DeportistaService) {}

  ngOnInit() {
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario = JSON.parse(data);
    }
    const idRecetas = this.usuario.dieta.map((e: any) => e.idMeal);
    idRecetas.forEach((id: any) => {
      this.deportistaService.getDataDetalleReceta(id).subscribe({
        next: (data) => {
          this.recetas.push(data.meals[0]);
        },
      });
    });

    console.log(this.recetas);
  }
}
