import { Component } from '@angular/core';
import { Personne } from './models/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  couleurs:string[]=['bleu','vert','rouge'];
  personnes:any[] =[];
  ngOnInit(){
    let personne1:any = {}; // on the fly
    personne1.nom = 'CRUISE';
    personne1.prenom = 'Tom';
    let personne2 = {prenom:'Brad',nom:'PITT'};
    let personne3:any = {"prenom":"Angelina","nom":"JOLIE"};
    personne3.age =23;
    let personne4:Personne = new Personne('Willis','Bruce');
    
    this.personnes.push(personne1);
    this.personnes.push(personne2);
    this.personnes.push(personne3);
    this.personnes.push(personne4);
  }
}
