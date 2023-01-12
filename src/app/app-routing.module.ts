import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorySearchComponent } from "./components/history-search/history-search.component";
import { StockDetailsComponent} from "./components/stock-details/stock-details.component";
import { LoginPageComponent} from "./components/login-page/login-page.component";
import { StockSearchComponent} from "./components/stock-search/stock-search.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent},
  { path: 'history', component: HistorySearchComponent},
  { path: 'stock-search', component: StockSearchComponent},
  { path: 'stock/:id/:date', component: StockDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
