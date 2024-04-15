import { Component } from '@angular/core';
import { StartnowComponent } from '../startnow/startnow.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [StartnowComponent, RouterLinkActive, RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

}
