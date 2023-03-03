import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';
@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.sass']
})
export class ReceptComponent {
  number:number = 0;
  recipe:Recipe={} as Recipe;

  constructor(private service:RecipesService, private route:ActivatedRoute ,private router:Router){
    this.route.params.subscribe(d=>{
      forkJoin([this.service.Get({table:'food', field:'ID', value:d['id']}), this.service.Get({table:'ingredients', field:'foodID', value:d['id']})]).subscribe(d=>{
        d[0][0].ingredients = d[1]
        this.recipe = d[0][0];
        console.log(this.recipe);
      })
    })
  }
  async delRecipe(id:number){
    this.service.Delete({
      table:"food",
      field:"ID",
      value:id
    }).subscribe()
    this.router.navigate(['/']);
  }
}
