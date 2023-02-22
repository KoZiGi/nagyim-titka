import { state, transition, animate, style, trigger, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import type {Recipe, Ingredient} from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.sass'],
  animations: [
    trigger('fade', [
      state('in', style({opacity:0})),
      transition(':enter', [
        animate(100, keyframes([style({opacity:0}), style({opacity:1})]))
      ]),
      transition(':leave', [
        animate(100, keyframes([style({opacity:1}), style({opacity:0})]))
      ])
    ])
  ]
})
export class UploadModalComponent {
  newRecipe:Recipe = {} as Recipe;
  newIngredient:Ingredient = {} as Ingredient;
  ingredients:Ingredient[] = [];
  constructor(private service:RecipesService){}
  async Upload(){
    await this.service.Post({
      table: 'food',
      data: this.newRecipe
    })
    for (let i = 0; i < this.ingredients.length; i++) {
      this.ingredients[i].foodID = 1;
      this.service.Post({table:'food', data:this.ingredients[i]});
    }
  }
  AddIngredient(){
    this.ingredients.push({
      amount: this.newIngredient.amount,
      unit: this.newIngredient.unit,
      name:this.newIngredient.name
    });
  }
  DeleteIngredient(id:number){
    this.ingredients.splice(id, 1);
  }
}
