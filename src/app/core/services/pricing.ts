import { Injectable, signal } from '@angular/core';
import { Plan } from '../models/plan';
import { PLANS } from '../../shared/constants/plans.constant';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  /** Señal de solo lectura — los componentes no pueden mutar los planes */
  private readonly _plans = signal<readonly Plan[]>(PLANS);
  readonly plans = this._plans.asReadonly();

  getById(id: string): Plan | undefined {
    return this._plans().find((p) => p.id === id);
  }
}