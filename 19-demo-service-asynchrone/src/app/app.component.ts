import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonneService } from './services/personne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  personne:any={nom:'DUJARDIN',prenom:'Jean'};

  constructor(private service:PersonneService){
  }
  ngOnInit(){
   // this.personne = this.service.personne;
   // abonnement 
    this.service.sub.subscribe(
      (personne) =>{
        this.personne =personne;
      }
    );
    this.service.lecture();
  }
  
  onEcrire(){
    this.personne= {nom:'CASH',prenom:'Johnny'};
    this.service.ecriture(this.personne);
  }
 
  
}
