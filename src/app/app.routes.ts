import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { StockComponent } from './stock/stock.component';
import { OriginComponent } from './origin/origin.component';

export const routes: Routes = [
    {path:'about', component: AboutComponent},
    {path: '', pathMatch:'full' ,component: OriginComponent},
    {path: 'stock', component: StockComponent}
    
];
