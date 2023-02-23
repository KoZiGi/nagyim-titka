import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  constructor(private service:RecipesService){this.getdata()}
  recipes:Recipe[]=[];
  async getdata() {
    await this.service.Get({
      table:"food"
    }).then(res=>{res.subscribe(data=>{this.recipes=data; console.log(this.recipes)})})
  }
}
