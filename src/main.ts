import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';  // 👈 IMPORTANTE
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient(),   // 👈 AGREGA ESTO
    importProvidersFrom(RouterModule)
  ]
});