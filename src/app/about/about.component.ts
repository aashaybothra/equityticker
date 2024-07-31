import { Component, inject, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public router = inject(Router);
  

}
