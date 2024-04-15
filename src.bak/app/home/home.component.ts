import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StartnowComponent } from '../startnow/startnow.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, StartnowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
