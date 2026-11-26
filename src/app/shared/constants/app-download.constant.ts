/**
 * Ruta pública del APK. El archivo vive en `public/downloads/` y Angular lo
 * copia tal cual al build. Para publicar una nueva versión, reemplaza ese
 * archivo con el APK nuevo (mismo nombre) y vuelve a desplegar.
 */
export const APK_DOWNLOAD_URL = '/downloads/errands-chores.apk';
export const APK_FILE_NAME = 'errands-chores.apk';

/**
 * URL de la versión web instalable (PWA) de la app, para iPhone y computador.
 * Mientras sea `null`, esos dispositivos reciben un aviso en lugar de un enlace.
 * Cuando la app esté publicada como PWA, pon aquí su URL.
 */
export const WEB_APP_URL: string | null = null;
