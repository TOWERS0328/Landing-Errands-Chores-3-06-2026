// src/app/components/features/features.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  readonly features: Feature[] = [
    {
      icon: 'bi-check2-square',
      title: 'Tasks & priorities',
      description: 'Create tasks with a priority, a due date and photos. Swipe to complete, postpone or delete, with undo.',
      color: '#6C63FF',
    },
    {
      icon: 'bi-bell-fill',
      title: 'Reminders',
      description: 'Get a notification when a task is due, so nothing slips.',
      color: '#F97316',
    },
    {
      icon: 'bi-calendar3',
      title: 'Calendar & history',
      description: 'See your tasks by day and search everything you have done.',
      color: '#0EA5E9',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Stats & streaks',
      description: 'Track what you get done each week and keep your streak going.',
      color: '#22C55E',
    },
    {
      icon: 'bi-phone',
      title: 'Install it anywhere',
      description: 'Add it to your home screen on Android, iPhone or computer. No app store, and it works offline.',
      color: '#EC4899',
    },
    {
      icon: 'bi-palette-fill',
      title: 'Themes',
      description: 'Pick one of five themes. Available in English and Español.',
      color: '#8B5CF6',
    },
  ];
}