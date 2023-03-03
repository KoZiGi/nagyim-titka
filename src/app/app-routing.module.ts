import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReceptComponent } from './recept/recept.component';
import { RecipeModComponent } from './recipe-mod/recipe-mod.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'recipe/:id', component:ReceptComponent},
  {path:'mod/:id', component:RecipeModComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
