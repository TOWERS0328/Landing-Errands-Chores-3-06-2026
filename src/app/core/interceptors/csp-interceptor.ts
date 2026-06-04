

import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/** Dominios permitidos para peticiones HTTP salientes */
const ALLOWED_ORIGINS = [
  'https://play.google.com',
] as const;

export const cspInterceptor: HttpInterceptorFn = (req, next) => {
  const document = inject(DOCUMENT);
  const requestOrigin = new URL(req.url, document.baseURI).origin;

  const isAllowed = ALLOWED_ORIGINS.some((origin) =>
    requestOrigin.startsWith(origin)
  );

  if (!isAllowed) {
    console.warn(`[CSP] Blocked outgoing request to: ${requestOrigin}`);
    throw new Error(`Request to ${requestOrigin} is not allowed by CSP policy.`);
  }

  return next(req);
};