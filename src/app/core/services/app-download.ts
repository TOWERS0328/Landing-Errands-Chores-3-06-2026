import { Injectable } from '@angular/core';
import { WEB_APP_URL } from '../../shared/constants/app-download.constant';

/**
 * Lleva al visitante a la app web (PWA). Se abre en la misma pestaña: en el celular,
 * la app muestra cómo instalarla (botón "Instalar" en Android, Compartir → "Agregar a
 * inicio" en iPhone).
 */
@Injectable({ providedIn: 'root' })
export class AppDownload {
  openApp(): void {
    window.location.href = WEB_APP_URL;
  }
}
