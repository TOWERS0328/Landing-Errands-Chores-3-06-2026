// src/app/components/cta/cta.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDownload } from '../../core/services/app-download';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {
  private readonly appDownload = inject(AppDownload);

  onDownload(): void {
    this.appDownload.download();
  }
}