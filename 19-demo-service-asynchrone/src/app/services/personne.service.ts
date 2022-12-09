import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PersonneService {
    private personne: any = {nom:'EPONGE',prenom:'BOB'};
    
    public sub = new Subject(); // transporteur
    private url: string = 'https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';

    constructor(private http: HttpClient) { }

    emmitSub() {
        this.sub.next(this.personne);
    }
    lecture() {
        let url = this.url + 'clients.json';
        this.http.get<any>(url).subscribe(
            (data) => { // j'attend la response de Omdb Api
                if (data != undefined) {
                    this.personne = data;
                    this.emmitSub();
                }
            }
        );
    }
    ecriture(personne:any) {
        this.personne =personne;
        let url = this.url + 'clients.json';
        console.log(this.personne);
        this.http.put<any>(url,personne).subscribe(
            (data) => { // j'attend la response de Omdb Api
                console.log('ecriture !');
                
            }
        );
    }

}