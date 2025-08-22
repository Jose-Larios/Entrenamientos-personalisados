import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, IonLabel } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin';
import { Admin, Entrenadores, Deportistas } from 'src/app/services/interface';
@Component({
  selector: 'app-ver-registros',
  templateUrl: './ver-registros.component.html',
  styleUrls: ['./ver-registros.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class VerRegistrosComponent implements OnInit {
  // Datos guardados
  adminData: Admin[] = [];
  entrenadorData: Entrenadores[] = [];
  deportistasData: Deportistas[] = [];

  constructor(
    private adminService: AdminService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtener datos administrador
    this.adminService.getAdmins().subscribe((Adata) => {
      this.adminData = Adata;
    });

    // Obtener datos entrenador
    this.adminService.getEntrenadores().subscribe((Edata) => {
      this.entrenadorData = Edata;
    });

    // Obtener datos deportista
    this.adminService.getDeportistas().subscribe((Ddata) => {
      this.deportistasData = Ddata;
    });
  }

  // Actulizar administrador
  async actualizarAdmin(item: any) {
    const alert = await this.alertController.create({
      header: 'Actualizar usuario',
      inputs: [
        { name: 'nombre', type: 'text', value: item.nombre },
        { name: 'apellidos', type: 'text', value: item.apellidos },
        { name: 'correo', type: 'email', value: item.correo },
        { name: 'edad', type: 'tel', value: item.edad },
        { name: 'telefono', type: 'tel', value: item.telefono },
        { name: 'contra', type: 'password', value: item.contra },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Actulizar',
          handler: (data) => {
            this.adminService.actualizarAdmin(item.id, data);
          },
        },
      ],
    });
    await alert.present();
  }

  // Actulizar entrenador
  async actualizarEntrenador(item: any) {
    const alert = await this.alertController.create({
      header: 'Actualizar usuario',
      inputs: [
        { name: 'nombre', type: 'text', value: item.nombre },
        { name: 'apellidos', type: 'text', value: item.apellidos },
        { name: 'correo', type: 'email', value: item.correo },
        { name: 'edad', type: 'tel', value: item.edad },
        { name: 'telefono', type: 'tel', value: item.telefono },
        { name: 'gradoEstudio', type: 'text', value: item.gradoEstudio },
        { name: 'lugarEstudio', type: 'text', value: item.lugarEstudio },
        { name: 'contra', type: 'password', value: item.contra },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Actualizar',
          handler: (data) => {
            this.adminService.actualizarEntrenador(item.id, data);
          },
        },
      ],
    });
    await alert.present();
  }

  // Actulizar deportista
  async actualizarDeportista(item: any) {
    const alert = await this.alertController.create({
      header: 'Actualizar usuario',
      inputs: [
        { name: 'nombre', type: 'text', value: item.nombre },
        { name: 'apellidos', type: 'text', value: item.apellidos },
        { name: 'correo', type: 'email', value: item.correo },
        { name: 'edad', type: 'tel', value: item.edad },
        { name: 'telefono', type: 'tel', value: item.telefono },
        {
          name: 'telefonoEmergencia',
          type: 'tel',
          value: item.telefonoEmergencia,
        },
        { name: 'enfermedades', type: 'text', value: item.enfermedades },
        { name: 'otros', type: 'text', value: item.otros },
        { name: 'objetivos', type: 'text', value: item.objetivos },
        { name: 'contra', type: 'password', value: item.contra },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Actualizar',
          handler: (data) => {
            this.adminService.actualizarDeportista(item.id, data);
          },
        },
      ],
    });
    await alert.present();
  }

  // Eliminar usuario
  eliminarUsuario(coleccion: string, id: string) {
    this.adminService.eliminarDocumento(coleccion, id);
  }
}
