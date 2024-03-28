import { Component } from '@angular/core';
import { StartnowComponent } from '../startnow/startnow.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StartnowComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
