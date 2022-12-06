import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits:string[]=[];
  fruit:string='';
  onAjouter():void{
    this.fruits.push(this.fruit);
    this.fruit='';// vider input
  }
  onEnlever(i:number):void{
    let test = confirm('Voulez vous enlever '+this.fruits[i]+ ' ?')
    if (test){
      this.fruits.splice(i,1);
    }
  }
  
}
