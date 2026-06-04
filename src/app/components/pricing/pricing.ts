

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingService } from '../../core/services/pricing';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format-pipe';

declare const Swal: any;

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

  onSelect(planName: string): void {
    if (planName === 'Free') {
      Swal.fire({
        icon: 'info',
        title: 'Free Plan',
        text: 'Download the app to get started for free!',
        confirmButtonColor: '#6C63FF',
        confirmButtonText: 'Download now',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Great choice! 🎉',
        text: 'Premium unlocks all themes, unlimited tasks and more.',
        confirmButtonColor: '#6C63FF',
        confirmButtonText: 'Get Premium',
      });
    }
  }
}