import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavoverlayComponent } from '../navoverlay/navoverlay.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavoverlayComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen = this.menuOpen ? false : true;
  }
}

