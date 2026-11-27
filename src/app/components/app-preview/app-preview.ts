// src/app/components/app-preview/app-preview.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AppScreen {
  id: string;
  label: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-app-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-preview.html',
  styleUrl: './app-preview.scss',
})
export class AppPreview {
  /** Capturas reales de la PWA (public/screens). */
  readonly screens: AppScreen[] = [
    {
      id: 'tasks',
      label: 'Tasks',
      description: 'Priorities, due dates and swipe actions',
      icon: 'bi-list-check',
      image: 'screens/tasks.webp',
      alt: 'Task list with priorities and due dates',
    },
    {
      id: 'calendar',
      label: 'Calendar',
      description: 'Your month at a glance, plus history',
      icon: 'bi-calendar3',
      image: 'screens/calendar.webp',
      alt: 'Monthly calendar with tasks per day and task history',
    },
    {
      id: 'stats',
      label: 'Stats',
      description: 'Streaks, weekly chart and completion rate',
      icon: 'bi-graph-up-arrow',
      image: 'screens/stats.webp',
      alt: 'Productivity stats with streak, weekly chart and completion rate',
    },
    {
      id: 'themes',
      label: 'Themes',
      description: 'Five themes, from light to Rosé',
      icon: 'bi-palette-fill',
      image: 'screens/rose.webp',
      alt: 'Task list in the Rosé theme',
    },
  ];

  active = 0;

  setActive(i: number): void {
    this.active = i;
  }
}
