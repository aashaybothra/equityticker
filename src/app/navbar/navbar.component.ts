import { Component, inject, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, AboutComponent, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public router = inject(Router)
  public route = inject(ActivatedRoute)
  onClick(){
  this.router.navigate(['/about'])
}
}
