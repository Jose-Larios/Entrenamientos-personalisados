import { Injectable } from '@angular/core';

// Interface de Admin
export interface Admin {
  id: string;
  apellidos: string;
  contra: string;
  correo: string;
  edad: number;
  nombre: string;
  telefono: number;
}

// Interface de Entrenadores
export interface Entrenadores {
  id: string;
  apellidos: string;
  contra: string;
  correo: string;
  edad: number;
  gradoEstudio: string;
  lugarEstudio: string;
  nombre: string;
  telefono: number;
}

// Interface de Deportistas
export interface Deportistas {
  id: string;
  activo: boolean;
  apellidos: string;
  contra: string;
  correo: string;
  edad: number;
  nombre: string;
  telefono: number;
  telefonoEmergencia: number;
  enfermedades: string;
  otros: string;
  objetivos: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class Interface {}
