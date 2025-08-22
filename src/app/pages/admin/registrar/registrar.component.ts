import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AdminService } from 'src/app/services/admin';
import { Admin, Entrenadores, Deportistas } from 'src/app/services/interface';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class RegistrarComponent implements OnInit {
  // Cambiar formulario
  activarFormularioRegistro: string = '';
  mostrarFormulario(nombreFormulario: string) {
    this.activarFormularioRegistro = nombreFormulario;
  }

  // Iniciar nuevo administrador
  nuevoAdmin: Admin = {
    id: '',
    apellidos: '',
    contra: '',
    correo: '',
    edad: 0,
    nombre: '',
    telefono: 22,
  };

  // Iniciar nuevo entrenador
  nuevoEntrenador: Entrenadores = {
    id: '',
    apellidos: '',
    contra: '',
    correo: '',
    edad: 0,
    gradoEstudio: '',
    lugarEstudio: '',
    nombre: '',
    telefono: 22,
  };

  // Iniciar nuevo deportista
  nuevoDeportista: Deportistas = {
    id: '',
    activo: true,
    apellidos: '',
    contra: '',
    correo: '',
    edad: 0,
    nombre: '',
    telefono: 22,
    telefonoEmergencia: 22,
    enfermedades: '',
    otros: '',
    objetivos: '',
  };

  constructor(
    private adminService: AdminService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  // Agregar nuevo administrador
  agregarNuevoAdmin() {
    this.adminService.agregarAdmin(this.nuevoAdmin).then(() => {
      console.log('Agregado');
      this.nuevoAdmin = {
        id: '',
        nombre: '',
        apellidos: '',
        correo: '',
        contra: '',
        edad: 0,
        telefono: 0,
      };
    });
  }

  // Agregar nuevo entrenador
  agregarNuevoEntrenador() {
    this.adminService.agregarEntrenador(this.nuevoEntrenador).then(() => {
      console.log('Agregado');
      this.nuevoEntrenador = {
        id: '',
        apellidos: '',
        contra: '',
        correo: '',
        edad: 0,
        gradoEstudio: '',
        lugarEstudio: '',
        nombre: '',
        telefono: 0,
      };
    });
  }

  // Agregar nuevo deportista
  agregarNuevoDeportista() {
    this.adminService.agregarDeportista(this.nuevoDeportista).then(() => {
      alert;
      this.nuevoDeportista = {
        id: '',
        activo: true,
        apellidos: '',
        contra: '',
        correo: '',
        edad: 0,
        nombre: '',
        telefono: 0,
        telefonoEmergencia: 0,
        enfermedades: '',
        otros: '',
        objetivos: '',
      };
    });
  }

  // Alerta usuario creado
  async alertUsuarioCreado() {
    const alert = await this.alertController.create({
      header: 'Usuario creado exitosamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
