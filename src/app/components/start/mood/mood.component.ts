import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit{

  isDarkMode = false;
  title = 'my-portfolio';

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark-theme' : '';
    this.renderer.setAttribute(this.document.body, 'class', theme);
    localStorage.setItem('theme', theme);
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark-theme';
    this.renderer.setAttribute(this.document.body, 'class', savedTheme || '');
  }
}