import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EntrenadoresService } from 'src/app/services/entrenadores';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-rutinas',
  templateUrl: './crear-rutinas.component.html',
  styleUrls: ['./crear-rutinas.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class CrearRutinasComponent implements OnInit {
  constructor(
    private entrenadoresService: EntrenadoresService,
    private route: ActivatedRoute
  ) {}
  ejercicios: any[] = [];
  ejerciciosSeleccionados: any[] = [];
  deportistaId!: string;
  // Obtener dia de rutina
  dia: string = 'Lunes';

  ngOnInit() {
    // Recuperar el id de la url
    this.deportistaId = this.route.snapshot.paramMap.get('id') || '';
  }

  // Obtener datos ninja (ejercicios)
  cargarEjercicios() {
    const select = document.getElementById(
      'tipoEjercicio'
    )! as HTMLSelectElement;
    const seleccionEjercicio = select.value;
    this.entrenadoresService.getDataEjercicios(seleccionEjercicio).subscribe({
      next: (data) => {
        this.ejercicios = data;
      },
    });
  }

  // Saber si un ejercicio está seleccionado
  saberEjercicioSeleccionado(ejercicio: any): boolean {
    return this.ejerciciosSeleccionados.some((e) => e.name === ejercicio.name);
  }

  // Guardar ejercicio seleccionado
  seleccionarEjercicio(
    ejercicio: any,
    repeticiones: string,
    series: string,
    tiempoDescanso: string,
    marcado: boolean
  ) {
    const indiceEjercicio = this.ejerciciosSeleccionados.findIndex(
      (e) => e.name === ejercicio.name
    );

    if (marcado) {
      const ejercicioSeleccionado = {
        name: ejercicio.name,
        type: ejercicio.type,
        muscle: ejercicio.muscle,
        equipment: ejercicio.equipment,
        difficulty: ejercicio.difficulty,
        instructions: ejercicio.instructions,
        repeticiones: repeticiones,
        series: series,
        tiempoDescanso: tiempoDescanso,
      };
      this.ejerciciosSeleccionados.push(ejercicioSeleccionado);
      console.log('si');
    } else {
      console.log('no');

      if (indiceEjercicio > -1) {
        this.ejerciciosSeleccionados.splice(indiceEjercicio, 1);
      }
      // this.ejerciciosSeleccionados.filter((e) => e.name !== ejercicio.name);
    }

    console.log('Ejercicios seleccionados:', this.ejerciciosSeleccionados);
  }

  crearRutina(form: any) {
    this.entrenadoresService
      .guardarRutina(this.deportistaId, this.dia, this.ejerciciosSeleccionados)
      .then(() => {
        console.log('Rutina guardada ✅');
        // Limpiar los arrays
        this.ejerciciosSeleccionados = [];
        // Resetear el formulario
        form.resetForm();
      });
  }
}
