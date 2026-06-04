// src/app/components/app-preview/app-preview.component.ts

import { AfterViewInit, Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const gsap: any;

interface Screenshot {
  id: number;
  label: string;
  icon: string;
  description: string;
  tasks: { text: string; done: boolean }[];
  accent: string;
}

@Pipe({ name: 'completedCount', standalone: true })
export class CompletedCountPipe implements PipeTransform {
  transform(tasks: { done: boolean }[]): number {
    return tasks.filter((t) => t.done).length;
  }
}

@Component({
  selector: 'app-app-preview',
  standalone: true,
  imports: [CommonModule, CompletedCountPipe],
  templateUrl: './app-preview.html',
  styleUrl: './app-preview.scss',
})
export class AppPreview implements AfterViewInit {
  readonly screenshots: Screenshot[] = [
    {
      id: 1,
      label: 'Dashboard',
      icon: 'bi-grid-fill',
      description: 'All your tasks at a glance',
      accent: '#6C63FF',
      tasks: [
        { text: 'Buy groceries', done: true },
        { text: 'Pay bills', done: true },
        { text: 'Walk the dog', done: false },
        { text: 'Call dentist', done: false },
      ],
    },
    {
      id: 2,
      label: 'Reminders',
      icon: 'bi-bell-fill',
      description: 'Never miss what matters',
      accent: '#F97316',
      tasks: [
        { text: '9:00 AM — Morning run', done: true },
        { text: '12:00 PM — Lunch prep', done: false },
        { text: '6:00 PM — Gym session', done: false },
        { text: '9:00 PM — Read 30 min', done: false },
      ],
    },
    {
      id: 3,
      label: 'Progress',
      icon: 'bi-graph-up-arrow',
      description: 'Track your productivity',
      accent: '#22C55E',
      tasks: [
        { text: 'Monday  — 8/8 tasks ✅', done: true },
        { text: 'Tuesday — 6/7 tasks ✅', done: true },
        { text: 'Wednesday — 4/6 tasks', done: false },
        { text: 'Thursday — 2/5 tasks', done: false },
      ],
    },
    {
      id: 4,
      label: 'Themes',
      icon: 'bi-palette-fill',
      description: 'Make it yours',
      accent: '#8B5CF6',
      tasks: [
        { text: 'Violet Dream — Active', done: true },
        { text: 'Ocean Breeze 🔒', done: false },
        { text: 'Forest Calm 🔒', done: false },
        { text: 'Midnight Dark 🔒', done: false },
      ],
    },
  ];

  active = 0;

  ngAfterViewInit(): void {
    if (typeof gsap !== 'undefined') {
      gsap.to('.preview-section .phone-frame', {
        y: -8,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1,
        willChange: 'transform',
      });
    }
  }

  setActive(i: number): void {
    if (this.active === i || typeof gsap === 'undefined') {
      this.active = i;
      return;
    }

    const phoneFrame = document.querySelector('.preview-section .phone-frame');
    if (!phoneFrame) {
      this.active = i;
      return;
    }

    gsap.to(phoneFrame, {
      opacity: 0,
      x: 20,
      duration: 0.2,
      onComplete: () => {
        this.active = i;
        requestAnimationFrame(() => {
          const nextFrame = document.querySelector('.preview-section .phone-frame');
          gsap.fromTo(
            nextFrame || phoneFrame,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
          );
        });
      },
    });
  }
}
