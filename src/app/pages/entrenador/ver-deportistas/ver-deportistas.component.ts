import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EntrenadoresService } from 'src/app/services/entrenadores';
import { Deportistas } from 'src/app/services/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-deportistas',
  templateUrl: './ver-deportistas.component.html',
  styleUrls: ['./ver-deportistas.component.scss'],
  imports: [CommonModule, IonicModule, RouterLink],
})
export class VerDeportistasComponent implements OnInit {
  // Datos guardados
  deportistasData: Deportistas[] = [];

  constructor(private entrenadoresService: EntrenadoresService) {}

  ngOnInit() {
    // Obtener datos deportistas
    this.entrenadoresService.getDeportistas().subscribe((DData) => {
      this.deportistasData = DData;
      console.log(this.deportistasData);
    });
  }
}
