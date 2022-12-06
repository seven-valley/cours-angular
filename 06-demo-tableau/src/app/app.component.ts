import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableau:number[]= [25,56,58];
  fruits:string[] =['kiwi','pomme','poire'];
  ngOnInit(){
    
    this.fruits[3]='mangue';
    this.fruits.push('cerise');
    console.log(this.fruits);
    // effacer poire
    this.fruits.splice(2,1); //indice nb elements à effacer
    //-----
    for (let i =0;i<this.fruits.length;i++){
      console.log(this.fruits[i]);
    }
    //-----
    for(let f of this.fruits){
      console.log(f);
    }
  }
}
