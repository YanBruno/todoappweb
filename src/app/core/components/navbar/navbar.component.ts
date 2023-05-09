import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isActive = false;

  constructor(private authService: AuthService) { }

  onLogout(): void {
    this.authService.logout();
  }

  activeMenu() {
    this.isActive = !this.isActive;
  }
}
