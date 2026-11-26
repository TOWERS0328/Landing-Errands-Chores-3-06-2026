import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import { APK_DOWNLOAD_URL, APK_FILE_NAME } from '../../shared/constants/app-download.constant';

@Injectable({ providedIn: 'root' })
export class AppDownload {
  private readonly notyf = new Notyf({
    duration: 6000,
    position: { x: 'center', y: 'top' },
    dismissible: true,
  });

  download(): void {
    const link = document.createElement('a');
    link.href = APK_DOWNLOAD_URL;
    link.download = APK_FILE_NAME;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();

    this.notyf.success(
      'Descargando Errands & Chores. Al abrir el APK, Android puede pedirte permitir "instalar apps desconocidas".'
    );
  }
}
