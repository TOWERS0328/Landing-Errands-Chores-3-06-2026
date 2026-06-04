// src/app/components/hero/hero.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const Swal: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  onDownload(): void {
    Swal.fire({
      icon: 'success',
      title: 'Coming soon! 🎉',
      text: 'The app will be available on Google Play very soon.',
      confirmButtonColor: '#6C63FF',
      confirmButtonText: 'Got it!',
    });
  }
}