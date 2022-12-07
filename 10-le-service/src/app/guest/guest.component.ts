import { Component, Input } from '@angular/core';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {
// ici je recupère les données envoyés

@Input() personne:any={};
@Input() indice:number=0;
constructor(private service:PersonneService){}

onChanger(){
  this.service.presence(this.indice);
}
}
