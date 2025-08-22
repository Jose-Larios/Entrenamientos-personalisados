import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private firestore: Firestore) {}

  async login(email: string, password: string) {
    const collections = ['admin', 'entrenadores', 'deportistas'];

    for (const col of collections) {
      const ref = collection(this.firestore, col);
      const q = query(
        ref,
        where('correo', '==', email),
        where('contra', '==', password)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const userData = snapshot.docs[0].data();
        return { rol: col, ...userData };
      }
    }

    throw new Error('Correo o contraseña incorrectos');
  }
}
