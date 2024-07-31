import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlphaService } from '../alpha.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private alphaService = inject(AlphaService);
  searchTerm: string = '';
  searchResults: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['symbol', 'name', 'currency'];
  showPopup: boolean = false;
  public router = inject(Router)
  public route = inject(ActivatedRoute)

  getTickerInfo() {
    this.alphaService.searchTicker(this.searchTerm).subscribe((data: any) => {
      this.searchResults = (data.bestMatches || []).slice(0, 5);
      this.dataSource.data = this.searchResults;
      this.showPopup = true;
    });
  }

  closePopup() {
    this.showPopup = false;
    this.searchTerm = '';
  }
  onRowClicked(row: any, index: number) {
    console.log('Row clicked:', row, 'at index:', index);
    console.log(row['1. symbol']);
    this.router.navigate(['/stock'], { 
      relativeTo: this.route,
      queryParams: { 
        symbol: row['1. symbol'],
        name: row['2. name'],
        type: row['3. type'],
        currency: row['8. currency'],
        region: row['4. region']
      },
    });
  }
  
}

