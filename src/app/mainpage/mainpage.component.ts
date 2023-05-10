import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  template: '<app-navbar></app-navbar> <html class="has-navbar-fixed-top"></html> <router-outlet></router-outlet>',
})
export class MainPageComponent { }
