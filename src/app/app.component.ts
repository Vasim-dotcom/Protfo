import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { filter } from 'rxjs/operators';
import { routeFadeAnimation } from '../../../protfo/src/app/components/navbar/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeFadeAnimation]
})
export class AppComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {
    AOS.init({ once: true, duration: 900 });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => AOS.refresh(), 200);
      });
  }
}
