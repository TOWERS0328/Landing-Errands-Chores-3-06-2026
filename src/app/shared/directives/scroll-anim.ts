

import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnim]',
  standalone: true,
})
export class ScrollAnimDirective implements OnInit, OnDestroy {
  /** Clase CSS que se agrega cuando el elemento entra al viewport */
  @Input() appScrollAnim = 'is-visible';
  /** Qué porcentaje del elemento debe ser visible antes de disparar */
  @Input() animThreshold = 0.15;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.appScrollAnim);
          this.observer.unobserve(this.el.nativeElement); // dispara solo una vez
        }
      },
      { threshold: this.animThreshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}