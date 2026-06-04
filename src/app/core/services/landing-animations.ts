import { Injectable } from '@angular/core';

declare const gsap: any;
declare const ScrollTrigger: any;
declare const AOS: any;

@Injectable({ providedIn: 'root' })
export class LandingAnimations {
  private initialized = false;

  /** Run after the home page view is in the DOM (lazy route loaded). */
  initHomeAnimations(): void {
    if (this.initialized) {
      this.refreshAos();
      return;
    }

    this.initialized = true;
    this.initAos();
    this.initHeroGsap();
    this.initScrollSectionGsap();
    this.initStatCounters();
    this.scheduleAosFallback();
  }

  private initAos(): void {
    if (typeof AOS === 'undefined') {
      return;
    }

    AOS.init({ duration: 700, once: true, offset: 80 });
    this.refreshAos();
  }

  private refreshAos(): void {
    if (typeof AOS === 'undefined') {
      return;
    }

    if (typeof AOS.refreshHard === 'function') {
      AOS.refreshHard();
    } else {
      AOS.refresh();
    }
  }

  /** Unblock content if AOS never attached .aos-animate (common with lazy routes). */
  private scheduleAosFallback(): void {
    setTimeout(() => this.revealStuckAosElements(), 150);
    setTimeout(() => this.revealStuckAosElements(), 800);
  }

  private revealStuckAosElements(): void {
    document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
      const style = window.getComputedStyle(el);
      if (style.opacity === '0') {
        el.classList.add('aos-animate');
      }
    });

    document.querySelectorAll('.pricing-card[data-aos]:not(.aos-animate)').forEach((el) => {
      el.classList.add('aos-animate');
    });
  }

  private initHeroGsap(): void {
    if (typeof gsap === 'undefined') {
      return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .from('.badge-pill', { y: 20, opacity: 0, duration: 0.5, delay: 0.2 })
      .from('.hero-title', { y: 40, opacity: 0, duration: 0.7 }, '-=0.2')
      .from('.hero-sub', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-stats .stat', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')
      .from(
        '.hero-phone-mockup',
        { x: 60, opacity: 0, duration: 0.9, ease: 'back.out(1.4)' },
        '-=0.6'
      );

    gsap.to('.hero-phone-mockup', {
      y: -12,
      duration: 2.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      willChange: 'transform',
    });

    gsap.to('.hero-phone-mockup', {
      filter: 'drop-shadow(0 30px 40px rgba(108,99,255,0.25))',
      duration: 2.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    gsap.from('.mock-task', {
      x: -20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.12,
      delay: 1.2,
    });
  }

  private initScrollSectionGsap(): void {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    gsap.from('.preview-section .section-title', {
      scrollTrigger: { trigger: '.preview-section', start: 'top 75%' },
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    gsap.from('.tab-btn', {
      scrollTrigger: { trigger: '.preview-section', start: 'top 65%' },
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });

    gsap.from('.preview-section .phone-frame', {
      scrollTrigger: { trigger: '.preview-section', start: 'top 60%' },
      x: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'back.out(1.2)',
    });
  }

  private initStatCounters(): void {
    if (typeof gsap === 'undefined') {
      return;
    }

    const counters = Array.from(
      document.querySelectorAll<HTMLSpanElement>('.stat-number[data-target]')
    );

    if (counters.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target as HTMLSpanElement;
        const rawTarget = target.dataset['target'];
        if (!rawTarget) {
          return;
        }

        const suffix = (target.textContent || '').replace(/[\d.]/g, '');
        const targetValue = parseFloat(rawTarget);
        const animated = { value: 0 };

        gsap.to(animated, {
          value: targetValue,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            const current = rawTarget.includes('.')
              ? animated.value.toFixed(1)
              : Math.round(animated.value).toLocaleString();
            target.textContent = `${current}${suffix}`;
          },
        });

        obs.unobserve(target);
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }
}
