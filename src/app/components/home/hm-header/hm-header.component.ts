import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hm-header',
  templateUrl: './hm-header.component.html',
  styleUrls: ['./hm-header.component.css'],
})
export class HmHeaderComponent implements OnInit{
  ngOnInit(): void {
    
  }
  isMenuOpen = false;
  imagesrc : string = "../../../../assets/logo/logo-light.png";

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if(this.isMenuOpen === true)
    this.imagesrc = "../../../../assets/logo/logo-dark.png"
    else
    this.imagesrc = "../../../../assets/logo/logo-light.png"
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}