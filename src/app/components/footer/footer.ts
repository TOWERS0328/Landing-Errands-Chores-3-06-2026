// src/app/components/footer/footer.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDownload } from '../../core/services/app-download';

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
    { label: 'Preview', section: 'preview' },
  ];

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  private readonly appDownload = inject(AppDownload);

  onDownload(): void {
    this.appDownload.download();
  }
}