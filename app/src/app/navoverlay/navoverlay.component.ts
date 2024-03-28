import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navoverlay',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navoverlay.component.html',
  styleUrl: './navoverlay.component.css'
})
export class NavoverlayComponent {

}
