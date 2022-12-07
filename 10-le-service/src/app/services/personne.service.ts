export class PersonneService{
    personnes =[
        {prenom:'Bruce',nom:'Willis',viens:true},
        {prenom:'Bob',nom:'EPONGE',viens:false}
      ];  

    presence(i:number){ // change etat
        this.personnes[i].viens = !this.personnes[i].viens;
    }
    neViensPas(){
        for(let p of this.personnes){
            p.viens = false;
        }
    }
}