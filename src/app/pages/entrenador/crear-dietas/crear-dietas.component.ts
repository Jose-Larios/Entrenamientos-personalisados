import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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
    private route: ActivatedRoute
  ) {}
  recetas: any[] = [];
  recetasSeleccionada: any[] = [];
  detalleReceta: any = null;
  busqueda = 'chicken';
  deportistaId!: string;

  ngOnInit() {
    this.deportistaId = this.route.snapshot.paramMap.get('id') || '';
  }

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

  cargarDetalleReceta(idReceta: string) {
    this.entrenadoresService.getDataDetalleReceta(idReceta).subscribe({
      next: (data) => {
        this.detalleReceta = data.meals[0];
        console.log(this.detalleReceta);
      },
    });
  }

  saberRecetaSeleccionada(receta: any): boolean {
    return this.recetasSeleccionada.some((e) => e.idMeal === receta.idMeal);
  }

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

  guardarDieta(form: any) {
    this.entrenadoresService
      .guardarDieta(this.deportistaId, this.recetasSeleccionada)
      .then(() => {
        console.log('Rutina guardada ✅');
        // Limpiar los arrays
        this.recetasSeleccionada = [];
        // Resetear el formulario
        form.resetForm();
      });
  }

  // async buscar() {
  //   if (this.busqueda.length > 2) {
  //     this.recetas = await this.entrenadoresService.getDataRecetas(
  //       this.busqueda
  //     );
  //     this.detalle = null;
  //   }
  // }

  // verDetalle(receta: any) {
  //   this.detalle = receta;
  //   this.ingredientes = this.extraerIngredientes(receta);
  // }

  // private extraerIngredientes(receta: any): string[] {
  //   const ingredientes: string[] = [];
  //   for (let i = 1; i <= 20; i++) {
  //     const ing = receta[`strIngredient${i}`];
  //     const medida = receta[`strMeasure${i}`];
  //     if (ing && ing.trim()) {
  //       ingredientes.push(`${medida} ${ing}`);
  //     }
  //   }
  //   return ingredientes;
  // }
}
