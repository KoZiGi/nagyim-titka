import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReceptComponent } from './recept/recept.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'recipe/:id', component:ReceptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
