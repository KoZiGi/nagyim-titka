import { Component } from '@angular/core';
import { Ingredient } from '../recipe';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.sass']
})
export class UploadModalComponent {
  title:string = "";
  description:string = "";
  makingof:string = "";
  image:string = "";
  Ingredientes:Ingredient[]=[];

}
