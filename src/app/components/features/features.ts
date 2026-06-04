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
      title: 'Smart Task Lists',
      description: 'Create, organize and prioritize tasks with intuitive drag-and-drop.',
      color: '#6C63FF',
    },
    {
      icon: 'bi-bell-fill',
      title: 'Smart Reminders',
      description: 'Never miss a chore. Get timely notifications for every task.',
      color: '#F97316',
    },
    {
      icon: 'bi-palette-fill',
      title: '5 Custom Themes',
      description: 'Personalize your experience with beautiful color themes.',
      color: '#8B5CF6',
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Recurring Tasks',
      description: 'Set daily, weekly or monthly chores that repeat automatically.',
      color: '#0EA5E9',
    },
    {
      icon: 'bi-cloud-check-fill',
      title: 'Cloud Sync',
      description: 'Your tasks stay in sync across all your devices in real time.',
      color: '#22C55E',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Progress Tracking',
      description: 'Visualize your productivity with weekly stats and streaks.',
      color: '#EC4899',
    },
  ];
}