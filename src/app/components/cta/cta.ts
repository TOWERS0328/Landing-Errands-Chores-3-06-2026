// src/app/components/cta/cta.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const Swal: any;

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {
  onDownload(): void {
    Swal.fire({
      icon: 'success',
      title: 'Coming soon! 🎉',
      text: 'The app will be available on Google Play very soon. Stay tuned!',
      confirmButtonColor: '#6C63FF',
      confirmButtonText: 'Got it!',
    });
  }
}