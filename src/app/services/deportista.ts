import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Deportistas } from './interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeportistaService {
  constructor(private firestore: Firestore, private http: HttpClient) {}

  // Obtener datos deportista
  getDeportistas(): Observable<Deportistas[]> {
    const deportistasRef = collection(this.firestore, 'deportistas');
    return collectionData(deportistasRef, { idField: 'id' }) as Observable<
      Deportistas[]
    >;
  }

  // Obtener datos ninja (ejercicios)
  private apiUrl = environment.apiUrlEjercicios;
  private apiKey = environment.apiKeyEjercicios;

  getDataEjercicios(muscle: string): Observable<any> {
    const headers = new HttpHeaders({ 'X-Api-Key': this.apiKey });
    return this.http.get(`${this.apiUrl}?muscle=${muscle}`, { headers });
  }

  // Obtener datos themealDB (recetas)
  private apiUrlRecetas = environment.apiUrlRecetas;

  getDataRecetas(ingredientePrincipal: string): Observable<any> {
    return this.http.get(
      `${this.apiUrlRecetas}/filter.php?i=${ingredientePrincipal}`
    );
  }

  getDataDetalleReceta(idReceta: String): Observable<any> {
    return this.http.get(`${this.apiUrlRecetas}/lookup.php?i=${idReceta}`);
  }
}
