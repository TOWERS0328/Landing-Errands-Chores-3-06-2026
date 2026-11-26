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
      title: 'Tasks, tags & priorities',
      description: 'Create tasks, label them with tags and set a priority so the important stuff comes first.',
      color: '#6C63FF',
    },
    {
      icon: 'bi-bell-fill',
      title: 'Reminders',
      description: 'Get a notification when a task is due. High-priority tasks remind you again so nothing slips.',
      color: '#F97316',
    },
    {
      icon: 'bi-calendar3',
      title: 'Calendar & Google Calendar',
      description: 'See your tasks by day and sync them with your Google Calendar.',
      color: '#0EA5E9',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Stats & streaks',
      description: 'Track what you get done each week and keep your streak going.',
      color: '#22C55E',
    },
    {
      icon: 'bi-grid-1x2-fill',
      title: 'Home screen widgets',
      description: "Check today's tasks, your summary and your streak without opening the app.",
      color: '#EC4899',
    },
    {
      icon: 'bi-palette-fill',
      title: 'Themes & your own palette',
      description: 'Pick one of five themes or build your own palette. Available in English and Español.',
      color: '#8B5CF6',
    },
  ];
}