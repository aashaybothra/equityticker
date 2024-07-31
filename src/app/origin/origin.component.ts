import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-origin',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SearchComponent, RouterOutlet],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.css'
})
export class OriginComponent {
  public router = inject(Router)


}
