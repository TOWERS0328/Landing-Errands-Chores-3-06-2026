// src/app/components/footer/footer.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const Swal: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly links = [
    { label: 'Features', section: 'features' },
    { label: 'Themes', section: 'themes' },
    { label: 'Pricing', section: 'pricing' },
    { label: 'Reviews', section: 'testimonials' },
  ];

  readonly socials = [
    { icon: 'bi-twitter-x', label: 'Twitter' },
    { icon: 'bi-instagram', label: 'Instagram' },
    { icon: 'bi-facebook', label: 'Facebook' },
    { icon: 'bi-github', label: 'GitHub' },
  ];

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

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