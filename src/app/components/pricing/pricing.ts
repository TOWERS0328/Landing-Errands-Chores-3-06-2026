

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingService } from '../../core/services/pricing';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format-pipe';
import { AppDownload } from '../../core/services/app-download';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
  private pricingService = inject(PricingService);
  readonly plans = this.pricingService.plans;

  private readonly appDownload = inject(AppDownload);

  /** Todos los planes se activan dentro de la app, así que el CTA la descarga. */
  onSelect(): void {
    this.appDownload.download();
  }
}