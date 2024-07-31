import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OriginComponent } from './origin/origin.component';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OriginComponent, HighchartsChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alphaVantage';
  
}
