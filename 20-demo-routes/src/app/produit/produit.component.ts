import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {
  id:number=0;
  constructor(private route:ActivatedRoute){
}
ngOnInit(){
  // le + transforme string en number
  this.id = +this.route.snapshot.params["id"];
} 
}
