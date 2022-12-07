import { Component } from '@angular/core';
import { PersonneService } from './services/personne.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personnes:any[] =[];  
  //personneService;
  constructor(private service:PersonneService){
    // this.personneService= personneService (private)
  }
  ngOnInit(){ // je récupére le tableau du Service
    this.personnes = this.service.personnes;
  }
  onAnnuler(){
    this.service.neViensPas();
  }
}
