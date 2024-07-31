import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlphaService {
  constructor(private http: HttpClient) { }
  
  searchTicker(stock: string): Observable<any> {
    const encodedStock = encodeURIComponent(stock);
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'f6a2899a00mshe82efe61e208b96p1608e6jsn06fa54a928ab',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    });

    return this.http.get<any>(`https://alpha-vantage.p.rapidapi.com/query?datatype=json&keywords=${encodedStock}&function=SYMBOL_SEARCH`, { headers });
  }

  getQuote(symbol: string): Observable<any>{
    const encodedSymbol = encodeURIComponent(symbol);
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'f6a2899a00mshe82efe61e208b96p1608e6jsn06fa54a928ab',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    });

    return this.http.get<any>(`https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=${encodedSymbol}&datatype=json`, {headers});
  }
}
