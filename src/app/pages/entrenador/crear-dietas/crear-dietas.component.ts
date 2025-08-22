import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { EntrenadoresService } from 'src/app/services/entrenadores';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-dietas',
  templateUrl: './crear-dietas.component.html',
  styleUrls: ['./crear-dietas.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class CrearDietasComponent implements OnInit {
  constructor(
    private entrenadoresService: EntrenadoresService,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {}
  // Creacion de variables
  recetas: any[] = [];
  recetasSeleccionada: any[] = [];
  detalleReceta: any = null;
  busqueda = 'chicken';
  deportistaId!: string;

  ngOnInit() {
    // Obetener el id del deportista
    this.deportistaId = this.route.snapshot.paramMap.get('id') || '';
  }

  // Cargar los datos de las recetas
  cargarRecetas() {
    const select = document.getElementById(
      'ingredientePrincipal'
    )! as HTMLSelectElement;
    const seleccionIngrediente = select.value;
    this.entrenadoresService.getDataRecetas(seleccionIngrediente).subscribe({
      next: (data) => {
        this.recetas = data.meals;
        console.log(this.recetas);
      },
    });
  }

  // Cargar los detalles de las recetas
  cargarDetalleReceta(idReceta: string) {
    this.entrenadoresService.getDataDetalleReceta(idReceta).subscribe({
      next: (data) => {
        this.detalleReceta = data.meals[0];
        console.log(this.detalleReceta);
      },
    });
  }

  // Saber si la receta esta seleccionada
  saberRecetaSeleccionada(receta: any): boolean {
    return this.recetasSeleccionada.some((e) => e.idMeal === receta.idMeal);
  }

  // Seleccionar receta
  seleccionarReceta(receta: any, marcado: boolean) {
    const indiceReceta = this.recetasSeleccionada.findIndex(
      (e) => e.idMeal == receta.idMeal
    );

    if (marcado) {
      const recetaSeleccionada = {
        idMeal: receta.idMeal,
        strMeal: receta.strMeal,
        strMealThumb: receta.strMealThumb,
      };
      this.recetasSeleccionada.push(recetaSeleccionada);
      console.log('si');
    } else {
      console.log('no');
      if (indiceReceta > -1) {
        this.recetasSeleccionada.splice(indiceReceta, 1);
      }
    }
    console.log('Recetas seleccionadas: ', this.recetasSeleccionada);
  }

  // Guardar las recetas seleccionadas
  guardarDieta(form: any) {
    this.entrenadoresService
      .guardarDieta(this.deportistaId, this.recetasSeleccionada)
      .then(() => {
        console.log('Rutina guardada');
        this.recetasSeleccionada = [];
        form.resetForm();
      });
  }

  // Alerta dieta creada
  async alertaDietaCreada() {
    const alert = await this.alertController.create({
      header: 'Dieta creada exitosamente',
      buttons: ['Ok'],
    });
    await alert.present();
  }
}
