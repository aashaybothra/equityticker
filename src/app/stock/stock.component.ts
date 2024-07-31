import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlphaService } from '../alpha.service';
import { NgClass } from '@angular/common';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [NavbarComponent, NgClass, ChartsComponent],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  state: any;
  symbol!: string;
  symbolQuote: any;
  name: any;
  type: any;
  region: any;
  currency: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alphaService: AlphaService
  ) {}

  ngOnInit(): void {
    // Capture state values from navigation
    // Capture query params
    this.route.queryParams.subscribe(params => {
      this.symbol = params['symbol'];
      this.name = params['name'];
      this.type = params['type'];
      this.region = params['region'];
      this.currency = params['currency'];
      console.log('Symbol from query params:', this.symbol);
      if (this.symbol) {
        this.getPrice(this.symbol);
      }
    });
  }

  getCurrencySymbol(): string {
    return this.currency === 'INR' ? '₹' : '$';
  }

  getPrice(symbol: string) {
    this.alphaService.getQuote(symbol).subscribe((data: any) => {
      this.symbolQuote = data['Global Quote'];
    });
  }
}
