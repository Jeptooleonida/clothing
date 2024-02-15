import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clothing-store';

  constructor (private router: Router) {}

  ngOnInit(): void {
    const body = $('#body') as unknown as HTMLDivElement;
    body.innerHTML = 'TRIAL';
    console.log(body.innerHTML);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); 
      }
    });
  }
}
