import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/start/first-page/first-page.component';
import { HmHomeComponent } from './components/home/hm-home/hm-home.component';

const routes: Routes = [
  {path : '' , component:FirstPageComponent},
  {path : 'home', component:HmHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
