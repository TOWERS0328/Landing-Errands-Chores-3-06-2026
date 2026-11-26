// src/app/components/themes/themes.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Notyf } from 'notyf';

interface ThemeVars {
  primary: string;
  primaryDark: string;
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  bgDark: string;
  // Added variables to ensure elements remain visible across themes
  textOnPrimary?: string;
  textOnSurface?: string;
  border?: string;
  link?: string;
  success?: string;
  warning?: string;
  danger?: string;
}

interface Theme {
  id: string;
  name: string;
  colors: string[];
  icon: string;
  vars: ThemeVars;
}

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './themes.html',
  styleUrl: './themes.scss',
})
export class Themes implements OnInit {
  readonly themes: Theme[] = [
    // 1) LIGHT
    {
      id: 'light',
      name: 'Light',
      colors: ['#FFFFFF', '#534AB7', '#34C759'],
      icon: 'bi-sun',
      vars: {
        primary: '#534AB7',
        primaryDark: '#41349a',
        bg: '#FFFFFF',
        surface: '#F8F9FF',
        text: '#111827',
        textMuted: '#6B7280',
        bgDark: '#0F1724',
        success: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
        border: '#E6E7F2',
        link: '#534AB7',
      },
    },
    // 2) DARK
    {
      id: 'dark',
      name: 'Dark',
      colors: ['#0E0E0E', '#7F77DD', '#34C759'],
      icon: 'bi-moon',
      vars: {
        primary: '#7F77DD',
        primaryDark: '#6b63c9',
        bg: '#0E0E0E',
        surface: '#121217',
        text: '#F3F4F6',
        textMuted: '#9CA3AF',
        bgDark: '#050507',
        success: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
        border: '#1F2937',
        link: '#A99FF8',
      },
    },
    // 3) ROSÉ
    {
      id: 'rose',
      name: 'Rosé',
      colors: ['#4C1D3D', '#DC586D', '#F7E6EA'],
      icon: 'bi-heart',
      vars: {
        primary: '#DC586D',
        primaryDark: '#b94556',
        bg: '#4C1D3D',
        surface: '#5A2840',
        text: '#FFFFFF',
        textMuted: '#E7C9D1',
        bgDark: '#2b1220',
        success: '#34C759',
        warning: '#FFB57A',
        danger: '#FF3B30',
        border: '#6e2f45',
        link: '#FF7A95',
      },
    },
    // 4) FOREST
    {
      id: 'forest',
      name: 'Forest',
      colors: ['#0F2B1E', '#3C6848', '#CFEBD7'],
      icon: 'bi-tree',
      vars: {
        primary: '#3C6848',
        primaryDark: '#32583f',
        bg: '#0F2B1E',
        surface: '#102E22',
        text: '#E6F5EA',
        textMuted: '#9DBFAE',
        bgDark: '#071912',
        success: '#2ECC71',
        warning: '#F59E0B',
        danger: '#E02424',
        border: '#16372B',
        link: '#7FC7A8',
      },
    },
    // 5) LATTE
    {
      id: 'latte',
      name: 'Latte',
      colors: ['#E8B8B4', '#901C22', '#6B3A2A'],
      icon: 'bi-cup',
      vars: {
        primary: '#901C22',
        primaryDark: '#6f1418',
        bg: '#E8B8B4',
        surface: '#F4E6E5',
        text: '#2B0F0F',
        textMuted: '#6D4C4C',
        bgDark: '#3B1F1F',
        success: '#34C759',
        warning: '#D97706',
        danger: '#991B1B',
        border: '#E2CFCF',
        link: '#7A1B1F',
      },
    },
    // 6) CUSTOM - user-provided palette (defaults shown)
    {
      id: 'custom',
      name: 'Custom Palette',
      colors: [],
      icon: 'bi-palette',
      vars: {
        primary: '#534AB7',
        primaryDark: '#41349a',
        bg: '#FFFFFF',
        surface: '#F8F9FF',
        text: '#111827',
        textMuted: '#6B7280',
        bgDark: '#0F1724',
        success: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
        border: '#E6E7F2',
        link: '#534AB7',
      },
    },
  ];

  activeTheme = 'light';
  // Custom editor state
  showCustomEditor = false;
  showConfirmDiscard = false;
  customPalette: Partial<ThemeVars> = {};
  customPreview: ThemeVars | null = null;
  pendingCustomChanges = false;
  readonly notyf = new Notyf({ duration: 3500, position: { x: 'right', y: 'top' }, dismissible: true });

  ngOnInit(): void {
    this.applyTheme(this.themes[0]);
  }

  setActive(id: string): void {
    const theme = this.themes.find((item) => item.id === id);
    if (!theme) {
      return;
    }

    // If user selected custom, open editor modal to allow palette input
    if (id === 'custom') {
      this.openCustomEditor();
      return;
    }

    this.activeTheme = id;
    this.applyTheme(theme);
  }

  openCustomEditor(): void {
    const custom = this.themes.find((t) => t.id === 'custom');
    if (!custom) return;
    // initialize editor with current custom vars
    this.customPalette = { ...custom.vars };
    this.customPreview = { ...custom.vars };
    this.pendingCustomChanges = false;
    this.showCustomEditor = true;
  }

  closeCustomEditor(): void {
    if (this.pendingCustomChanges) {
      this.notyf.open({ type: 'warning', message: 'Hay cambios sin guardar. Confirma si deseas salir sin guardar.' });
      this.showConfirmDiscard = true;
      return;
    }
    this.resetCustomEditor();
  }

  confirmDiscardChanges(): void {
    this.showConfirmDiscard = false;
    this.resetCustomEditor();
  }

  cancelDiscard(): void {
    this.showConfirmDiscard = false;
  }

  private resetCustomEditor(): void {
    this.showCustomEditor = false;
    this.customPalette = {};
    this.customPreview = null;
    this.pendingCustomChanges = false;
    this.showConfirmDiscard = false;
  }

  applyCustomPreview(): void {
    const custom = this.themes.find((t) => t.id === 'custom');
    if (!custom) return;
    this.customPreview = { ...custom.vars, ...this.customPalette } as ThemeVars;
    this.pendingCustomChanges = true;
    this.notyf.success('Vista previa actualizada. Presiona Guardar para aplicar el tema a toda la landing.');
  }

  saveCustomTheme(): void {
    const custom = this.themes.find((t) => t.id === 'custom');
    if (!custom) return;

    const finalTheme = { ...custom.vars, ...(this.customPreview || this.customPalette) } as ThemeVars;
    custom.vars = finalTheme;
    custom.colors = [finalTheme.primary, finalTheme.bg, finalTheme.surface];

    this.activeTheme = 'custom';
    this.applyTheme(custom);
    this.showCustomEditor = false;
    this.customPalette = {};
    this.customPreview = null;
    this.pendingCustomChanges = false;
    this.notyf.success('Tema personalizado guardado y aplicado a toda la landing.');
  }

  get previewStyles(): Record<string, string> {
    const preview = this.customPreview || this.themes.find((t) => t.id === 'custom')?.vars;
    if (!preview) {
      return {};
    }

    return {
      background: preview.surface,
      color: preview.text,
      border: `1px solid ${preview.border || this.contrastFade(preview.surface, 0.08)}`,
    };
  }

  get previewButtonStyles(): Record<string, string> {
    const preview = this.customPreview || this.themes.find((t) => t.id === 'custom')?.vars;
    if (!preview) {
      return {};
    }

    return {
      background: preview.primary,
      color: this.getContrastText(preview.primary),
      borderColor: preview.primaryDark,
    };
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    // Basic colors
    root.style.setProperty('--color-primary', theme.vars.primary);
    root.style.setProperty('--color-primary-dark', theme.vars.primaryDark);
    root.style.setProperty('--color-bg', theme.vars.bg);
    root.style.setProperty('--color-surface', theme.vars.surface);
    root.style.setProperty('--color-text', theme.vars.text);
    root.style.setProperty('--color-text-muted', theme.vars.textMuted);
    root.style.setProperty('--color-bg-dark', theme.vars.bgDark);

    // Semantic colors (fallback to sensible defaults)
    root.style.setProperty('--color-success', theme.vars.success || '#34C759');
    root.style.setProperty('--color-warning', theme.vars.warning || '#FF9500');
    root.style.setProperty('--color-danger', theme.vars.danger || '#FF3B30');
    root.style.setProperty('--color-border', theme.vars.border || this.contrastFade(theme.vars.bg, 0.08));
    root.style.setProperty('--color-link', theme.vars.link || theme.vars.primary);

    // Compute accessible foregrounds for primary and surface
    const textOnPrimary = theme.vars.textOnPrimary || this.getContrastText(theme.vars.primary);
    const textOnSurface = theme.vars.textOnSurface || this.getContrastText(theme.vars.surface);
    root.style.setProperty('--color-text-on-primary', textOnPrimary);
    root.style.setProperty('--color-text-on-surface', textOnSurface);

    // Additional helpers to avoid invisible UI elements
    // e.g., ensure buttons, badges and icons have a readable color on their backgrounds
    root.style.setProperty('--btn-text-color', textOnPrimary);
    root.style.setProperty('--badge-text-color', textOnPrimary);
    root.style.setProperty('--icon-color', theme.vars.text);

    document.body.style.backgroundColor = theme.vars.bg;
    document.body.style.color = theme.vars.text;
  }

  // Returns either black or white depending on contrast with given hex color
  getContrastText(hex: string): string {
    try {
      const c = hex.replace('#', '');
      const bigint = parseInt(c.length === 3 ? c.split('').map(ch=>ch+ch).join('') : c, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      // sRGB luminance
      const srgb = [r, g, b].map((v) => {
        const pv = v / 255;
        return pv <= 0.03928 ? pv / 12.92 : Math.pow((pv + 0.055) / 1.055, 2.4);
      });
      const lum = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
      return lum > 0.5 ? '#000000' : '#FFFFFF';
    } catch (e) {
      return '#000000';
    }
  }

  // Small translucent border based on background color
  private contrastFade(hex: string, amount: number): string {
    try {
      const c = hex.replace('#', '');
      const bigint = parseInt(c.length === 3 ? c.split('').map(ch=>ch+ch).join('') : c, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${amount})`;
    } catch (e) {
      return `rgba(0,0,0,${amount})`;
    }
  }
}
