import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Admin, Entrenadores, Deportistas } from './interface';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private firestore: Firestore) {}

  // Obtener datos administrador
  getAdmins(): Observable<Admin[]> {
    const adminRef = collection(this.firestore, 'admin');
    return collectionData(adminRef, { idField: 'id' }) as Observable<Admin[]>;
  }

  // Obtener datos entrenadores
  getEntrenadores(): Observable<Entrenadores[]> {
    const entrenadoresRef = collection(this.firestore, 'entrenadores');
    return collectionData(entrenadoresRef, { idField: 'id' }) as Observable<
      Entrenadores[]
    >;
  }

  // Obtener datos deportistas
  getDeportistas(): Observable<Deportistas[]> {
    const deportistasRef = collection(this.firestore, 'deportistas');
    return collectionData(deportistasRef, { idField: 'id' }) as Observable<
      Deportistas[]
    >;
  }

  // Agregar administrador
  agregarAdmin(admin: Admin) {
    const adminRef = collection(this.firestore, 'admin');
    return addDoc(adminRef, admin);
  }

  // Agregar entrenador
  agregarEntrenador(entrenadores: Entrenadores) {
    const entrenadoresRef = collection(this.firestore, 'entrenadores');
    return addDoc(entrenadoresRef, entrenadores);
  }

  // Agregar deportista
  agregarDeportista(deportistas: Deportistas) {
    const deportistasRef = collection(this.firestore, 'deportistas');
    return addDoc(deportistasRef, deportistas);
  }

  // Actulizar administrador
  actualizarAdmin(id: string, data: any) {
    const adminRef = doc(this.firestore, `admin/${id}`);
    return updateDoc(adminRef, data);
  }

  // Actulizar entrenador
  actualizarEntrenador(id: string, data: any) {
    const entrenadorRef = doc(this.firestore, `entrenadores/${id}`);
    return updateDoc(entrenadorRef, data);
  }

  // Actualizaar deportista
  actualizarDeportista(id: string, data: any) {
    const deportistaRef = doc(this.firestore, `deportistas/${id}`);
    return updateDoc(deportistaRef, data);
  }

  // Eliminar cualquiera
  eliminarDocumento(coleccion: string, id: string) {
    const docRef = doc(this.firestore, `${coleccion}/${id}`);
    return deleteDoc(docRef);
  }
}
