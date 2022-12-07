import { Component } from '@angular/core';
import { Item } from './models/item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  liste:Item[]=[];
  produit:string='';
  onAjouter():void{
    this.liste.push(new Item(this.produit));
    this.produit='';
  }
  onEnlever(i:number):void{
    this.liste.splice(i,1);
  }
  onAcheter(i:number):void{
   this.liste[i].acheter = !this.liste[i].acheter;
  }
}
