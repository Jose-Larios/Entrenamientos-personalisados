import { ENVIRONMENT_INITIALIZER, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Llamando environmet
import { environment } from 'src/environments/environment';
import { Deportistas } from './interface';

@Injectable({
  providedIn: 'root',
})
export class EntrenadoresService {
  constructor(private firestore: Firestore, private http: HttpClient) {}

  // Obtener datos deportista
  getDeportistas(): Observable<Deportistas[]> {
    const deportistasRef = collection(this.firestore, 'deportistas');
    return collectionData(deportistasRef, { idField: 'id' }) as Observable<
      Deportistas[]
    >;
  }

  // Obtener datos ninja (ejercicios)
  private apiUrlEjercicios = environment.apiUrlEjercicios;
  private apiKeyEjercicios = environment.apiKeyEjercicios;

  getDataEjercicios(muscle: string): Observable<any> {
    const headers = new HttpHeaders({ 'X-Api-Key': this.apiKeyEjercicios });
    return this.http.get(`${this.apiUrlEjercicios}?muscle=${muscle}`, {
      headers,
    });
  }

  // Mandar rutina al firebase
  async guardarRutina(deportistaId: string, diaRutina: string, rutina: any[]) {
    const docRef = doc(this.firestore, `deportistas/${deportistaId}`);
    // Actualizar el campo 'rutina' del documento
    await setDoc(docRef, { [diaRutina]: rutina }, { merge: true });
  }

  // Obtener datos themealDB (recetas)
  private apiUrlRecetas = environment.apiUrlRecetas;

  getDataRecetas(ingredientePrincipal: string): Observable<any> {
    return this.http.get(
      `${this.apiUrlRecetas}/filter.php?i=${ingredientePrincipal}`
    );
  }

  // Obtener los datos themealDb (detalles)
  getDataDetalleReceta(idReceta: String): Observable<any> {
    return this.http.get(`${this.apiUrlRecetas}/lookup.php?i=${idReceta}`);
  }

  // Mandar rutina al firebase
  async guardarDieta(deportistaId: string, dietaCompleta: any[]) {
    const docRef = doc(this.firestore, `deportistas/${deportistaId}`);
    await setDoc(docRef, { dieta: dietaCompleta }, { merge: true });
  }
}
