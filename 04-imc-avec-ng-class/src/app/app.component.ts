import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  poids:string ='';
  taille:string='';
  titreImc:string='';
  tranche:string='';

  onCalculer():void{
    let imc:number = parseFloat(this.poids)
       / (parseFloat(this.taille)* parseFloat(this.taille));
    this.taille = this.poids = ''; // vider input
       // definir tranche
    if (imc < 18.5){
      this.tranche='maigreur';
    }else if(imc <25){
      this.tranche='normal';
    }else{
      this.tranche ='surpoids';
    }
    this.titreImc = imc.toFixed(1);
  }
}
