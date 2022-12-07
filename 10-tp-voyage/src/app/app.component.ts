import { Component, OnInit } from '@angular/core';
import { Idea } from './models/idea';
import { IdeaService } from './services/idea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // service
  ideas:Idea[]=[];
  nom:string='';
  constructor(private service:IdeaService){
    //this.service = service
  }
  ngOnInit(){
    this.ideas= this.service.ideas;
  }
  onChangeAll(){
    this.service.changerAll();
  }
  onAjouter(){
    this.service.ajouter(this.nom);
    this.nom='';//input
  }
}
