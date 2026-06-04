// src/app/pages/home/home.ts

import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Themes } from '../../components/themes/themes';
import { Features } from '../../components/features/features';
import { AppPreview } from '../../components/app-preview/app-preview';
import { Pricing } from '../../components/pricing/pricing';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Cta } from '../../components/cta/cta';
import { Footer } from '../../components/footer/footer';
import { LandingAnimations } from '../../core/services/landing-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    Themes,
    Features,
    AppPreview,
    Pricing,
    Testimonials,
    Cta,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  private readonly landingAnimations = inject(LandingAnimations);

  ngAfterViewInit(): void {
    this.landingAnimations.initHomeAnimations();
  }
}
