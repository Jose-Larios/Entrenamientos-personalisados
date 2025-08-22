import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './pages/admin/administrador/administrador.component';
import { EntrenadorComponent } from './pages/entrenador/entrenador/entrenador.component';
import { DeportistaComponent } from './pages/deportistas/deportista/deportista.component';

export const routes: Routes = [
  // Ruta principla (Login)
  {
    path: '',
    component: LoginComponent,
  },
  // Rutas Administradores
  {
    path: 'administradores',
    component: AdministradorComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/admin/mi-perfil-admin/mi-perfil-admin.component'
          ).then((m) => m.MiPerfilAdminComponent),
      },
      {
        path: 'registrar',
        loadComponent: () =>
          import('./pages/admin/registrar/registrar.component').then(
            (m) => m.RegistrarComponent
          ),
      },
      {
        path: 'verRegistros',
        loadComponent: () =>
          import('./pages/admin/ver-registros/ver-registros.component').then(
            (m) => m.VerRegistrosComponent
          ),
      },
    ],
  },
  // Rutas Entrenadores
  {
    path: 'entrenadores',
    component: EntrenadorComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/entrenador/mi-perfil-entrenador/mi-perfil-entrenador.component'
          ).then((m) => m.MiPerfilEntrenadorComponent),
      },
      {
        path: 'verDeportistas/crearRutina/:id',
        loadComponent: () =>
          import(
            './pages/entrenador/crear-rutinas/crear-rutinas.component'
          ).then((m) => m.CrearRutinasComponent),
      },
      {
        path: 'verDeportistas/crearDieta/:id',
        loadComponent: () =>
          import('./pages/entrenador/crear-dietas/crear-dietas.component').then(
            (m) => m.CrearDietasComponent
          ),
      },
      {
        path: 'verDeportistas',
        loadComponent: () =>
          import(
            './pages/entrenador/ver-deportistas/ver-deportistas.component'
          ).then((m) => m.VerDeportistasComponent),
      },
      {
        path: 'verPerfil',
        loadComponent: () =>
          import(
            './pages/entrenador/mi-perfil-entrenador/mi-perfil-entrenador.component'
          ).then((m) => m.MiPerfilEntrenadorComponent),
      },
    ],
  },
  // Rutas Deportista
  {
    path: 'deportista',
    component: DeportistaComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/deportistas/mi-perfil-deportista/mi-perfil-deportista.component'
          ).then((m) => m.MiPerfilDeportistaComponent),
      },
      {
        path: 'verRutina',
        loadComponent: () =>
          import('./pages/deportistas/ver-rutina/ver-rutina.component').then(
            (m) => m.VerRutinaComponent
          ),
      },
      {
        path: 'verDieta',
        loadComponent: () =>
          import('./pages/deportistas/ver-dieta/ver-dieta.component').then(
            (m) => m.VerDietaComponent
          ),
      },
    ],
  },
];
