import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { gsap } from 'gsap'; // Import GSAP (TweenMax replacement)

@Component({
  selector: 'app-hm-hero',
  templateUrl: './hm-hero.component.html',
  styleUrls: ['./hm-hero.component.css']
})
export class HmHeroComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const screenX = event.screenX;
    const t = -(window.innerWidth / 2 - screenX);

    const spans = this.el.nativeElement.querySelectorAll('.anima-container .home_title span');
    spans.forEach((span: HTMLElement) => {
      gsap.to(span, {
        duration: 1,
        x: () => {
          const i = 100 / (window.innerWidth / 2 / t);
          const a = (window.innerWidth - span.clientWidth) / 2 * (i / 100);
          return a;
        },
        force3D: true
      });
    });
  }
}