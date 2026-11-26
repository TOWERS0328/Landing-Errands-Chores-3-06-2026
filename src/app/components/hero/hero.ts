// src/app/components/hero/hero.component.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDownload } from '../../core/services/app-download';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly appDownload = inject(AppDownload);

  onOpenApp(): void {
    this.appDownload.openApp();
  }
}