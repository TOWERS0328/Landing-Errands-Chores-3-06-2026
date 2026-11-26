import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import {
  APK_DOWNLOAD_URL,
  APK_FILE_NAME,
  WEB_APP_URL,
} from '../../shared/constants/app-download.constant';

type Platform = 'android' | 'ios' | 'desktop';

@Injectable({ providedIn: 'root' })
export class AppDownload {
  private readonly notyf = new Notyf({
    duration: 7000,
    position: { x: 'center', y: 'top' },
    dismissible: true,
    types: [{ type: 'info', background: '#534AB7', icon: false }],
  });

  /** Elige la mejor forma de obtener la app según el dispositivo del visitante. */
  download(): void {
    const platform = this.detectPlatform();

    if (platform === 'android') {
      this.downloadApk();
      this.notyf.success(
        'Downloading Errands & Chores. When you open the file, Android may ask you to allow installing apps from this source.'
      );
      return;
    }

    if (WEB_APP_URL) {
      window.open(WEB_APP_URL, '_blank', 'noopener');
      return;
    }

    this.notyf.open({
      type: 'info',
      message:
        platform === 'ios'
          ? 'The iPhone version is on its way. For now the app is available for Android.'
          : 'Open this page on your Android phone to install the app.',
    });
  }

  private downloadApk(): void {
    const link = document.createElement('a');
    link.href = APK_DOWNLOAD_URL;
    link.download = APK_FILE_NAME;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  private detectPlatform(): Platform {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) return 'android';
    // iPadOS 13+ se presenta como Mac; se distingue por tener pantalla táctil.
    if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
      return 'ios';
    }
    return 'desktop';
  }
}
