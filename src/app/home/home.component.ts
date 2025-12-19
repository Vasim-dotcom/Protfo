import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  activeSection = 'intro';
  sections = ['intro', 'features', 'technology', 'future'];

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPos = window.scrollY + 120;

    for (let section of this.sections) {
      const el = document.getElementById(section);
      if (el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos) {
        this.activeSection = section;
      }
    }
  }
}
