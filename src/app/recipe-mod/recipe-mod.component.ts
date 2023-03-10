import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../recipe';
import { RecipesService } from '../recipes.service';
import { state, transition, animate, style, trigger, keyframes } from '@angular/animations';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-recipe-mod',
  templateUrl: './recipe-mod.component.html',
  styleUrls: ['./recipe-mod.component.sass'],
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
export class RecipeModComponent {
  ThisRecipe:Recipe={} as Recipe
  newIngredient:Ingredient = {} as Ingredient;

  constructor(private service:RecipesService,private route:ActivatedRoute ,private router:Router){
    this.route.params.subscribe(d=>{
      forkJoin([this.service.Get({table:'food', field:'ID', value:d['id']}), this.service.Get({table:'ingredients', field:'foodID', value:d['id']})]).subscribe(d=>{
        d[0][0].ingredients = d[1]
        this.ThisRecipe=d[0][0]
        console.log(this.ThisRecipe)
      })
    })
  }
  Mod(){
    this.service.Patch({table:"food",data:{title:this.ThisRecipe.title,description:this.ThisRecipe.description,makingof:this.ThisRecipe.makingof},field:"ID",value:this.ThisRecipe.ID}).subscribe()
    this.router.navigate(['/']);
  }
  AddIngredient(){
    this.ThisRecipe.ingredients.push({
      amount: this.newIngredient.amount,
      unit: this.newIngredient.unit,
      name:this.newIngredient.name
    });
    this.service.Post({table:"ingredients",data:{
      foodID:this.ThisRecipe.ID,
      amount: this.newIngredient.amount,
      unit: this.newIngredient.unit,
      name:this.newIngredient.name
    }}).subscribe()
  }

  DeleteIngredient(id:number){
    this.ThisRecipe.ingredients.splice(id, 1);
    this.service.Delete({table:"ingredients",field:"ID",value:id}).subscribe()
  }
}
