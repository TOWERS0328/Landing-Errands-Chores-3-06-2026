

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true,
})
export class CurrencyFormatPipe implements PipeTransform {
  /**
   * 0      → 'Free'
   * 2.99   → '$2.99/mo'
   */
  transform(value: number, period: 'mo' | 'free' = 'free'): string {
    if (value === 0 || period === 'free') return 'Free';
    return `$${value.toFixed(2)}/mo`;
  }
}