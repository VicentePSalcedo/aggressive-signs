import { Component } from '@angular/core';
import { StartnowComponent } from '../startnow/startnow.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StartnowComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
