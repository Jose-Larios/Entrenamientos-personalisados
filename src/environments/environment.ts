// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Api Firebase
  firebaseConfig: {
    apiKey: 'AIzaSyBG5SDccP_6_3cZbg1w6Gzt7-cFliJ7YUM',
    authDomain: 'aplicacion-fit.firebaseapp.com',
    projectId: 'aplicacion-fit',
    storageBucket: 'aplicacion-fit.firebasestorage.app',
    messagingSenderId: '209914747404',
    appId: '1:209914747404:web:3791633aba7637b8d42c29',
  },

  // Api Ninja para ejercicios
  apiUrlEjercicios: 'https://api.api-ninjas.com/v1/exercises',
  apiKeyEjercicios: 'MbyOhLSPYFEBsGd5IuQI2A==VdKrwupzCoUeoyZP',

  // Api Dietas
  apiUrlRecetas: 'https://www.themealdb.com/api/json/v1/1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
