import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  imageSrc: string = '';
  path !: string;
  isClicked: boolean = false; // Ajout de la variable d'état

  ngOnInit() {
    this.setThemeImage();
  }

  constructor(private router: Router) {} 

  setThemeImage() {
    const theme = localStorage.getItem('theme');
    this.imageSrc = theme === 'dark-theme' 
      ? '../../../../assets/images/errorD.svg' 
      : '../../../../assets/images/errorL.svg';
  }

  onProfileClick() {
    this.isClicked = true; 

    setTimeout(() => {
      this.router.navigate(['/home']); 
    }, 2500)
    this.ngOnInit();
  }
}
