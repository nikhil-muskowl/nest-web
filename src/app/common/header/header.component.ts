import { Component, OnInit, Directive, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ele: ElementRef, ) { }

  @HostListener('window:scroll', [''])
  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {

   
    if (window.pageYOffset > 100) {
      document.getElementById("navbar").style.background = "#fff";
      document.getElementById("navbar").className = "navbar navbar-expand-lg fixed-top navbar-light";
    } else {
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").className = "navbar navbar-expand-lg fixed-top navbar-dark";
    }   

  }

  
  ngOnInit() {
  }

}
