import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  async login() {
    try {
      const user = await this.loginService.login(this.email, this.password);
      console.log('Usuario logueado:', user);

      // Guardar usuario en localStorage
      localStorage.setItem('usuario', JSON.stringify(user));

      // Redirigir según rol
      if (user.rol === 'admin') {
        this.router.navigate(['/administradores']);
      } else if (user.rol === 'entrenadores') {
        this.router.navigate(['/entrenadores']);
      } else {
        this.router.navigate(['/deportista']);
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
