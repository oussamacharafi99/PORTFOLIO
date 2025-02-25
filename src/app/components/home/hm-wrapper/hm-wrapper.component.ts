import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hm-wrapper',
  templateUrl: './hm-wrapper.component.html',
  styleUrls: ['./hm-wrapper.component.css']
})
export class HmWrapperComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Ensure GSAP is initialized after the view is fully rendered
    this.initFlairAnimation();
  }

  private initFlairAnimation(): void {
    // Set initial position of the flair element
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    // Create quick setters for x and y properties
    const xSetter = gsap.quickSetter(".flair", "x", "px");
    const ySetter = gsap.quickSetter(".flair", "y", "px");

    // Add mousemove event listener
    window.addEventListener("mousemove", (e: MouseEvent) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    });
  }
}