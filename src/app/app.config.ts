import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';
import { errorInterceptor } from './core/interceptors/error/error.interceptor';

import { NgxSpinnerModule } from 'ngx-spinner';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'; 

import { provideToastr } from 'ngx-toastr'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([loadingInterceptor, errorInterceptor])
    ),

    importProvidersFrom(BrowserAnimationsModule, NgxSpinnerModule, ToastrModule.forRoot()),

    provideAnimations(),
    provideToastr(), 
  ],
};
