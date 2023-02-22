import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.sass']
})
export class ReceptComponent {
  @Input() receptid:number=0;
  
  constructor(private service:RecipesService){}
  recipe:Recipe={} as Recipe;
  
  async getdata() {
    await this.service.Get(
      {
        table:"recipes",
        field: "ID",
        value:this.receptid
      }
    ).then(res=>{res.subscribe(data=>{this.recipe=data[0]})})
  }
}