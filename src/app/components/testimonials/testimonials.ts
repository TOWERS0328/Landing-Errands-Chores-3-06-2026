// src/app/components/testimonials/testimonials.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  city: string;
  avatar: string;
  rating: number;
  review: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      city: 'New York, USA',
      avatar: 'SM',
      rating: 5,
      review:
        'This app completely changed how I manage my household. The reminders are spot on and the themes make it fun to use every day!',
    },
    {
      name: 'Carlos Herrera',
      city: 'Madrid, Spain',
      avatar: 'CH',
      rating: 5,
      review:
        'I tried dozens of to-do apps. This is the only one that stuck. Clean, fast, and the Premium plan is totally worth it.',
    },
    {
      name: 'Aisha Patel',
      city: 'London, UK',
      avatar: 'AP',
      rating: 4,
      review:
        'Love the progress tracking feature. Seeing my weekly stats keeps me motivated. Would love more theme options in the future!',
    },
  ];

  stars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
}