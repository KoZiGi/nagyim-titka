import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  constructor(private service:RecipesService){}
  recipes:Recipe={}as Recipe;
  async getdata() {
    await this.service.Get({
      table:"recipes"
    }).then(res=>{res.subscribe(data=>{this.recipes=data})})
  }
}
