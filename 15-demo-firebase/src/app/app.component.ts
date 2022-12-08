import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(private http:HttpClient){
  }
  ngOnInit(){
    
  }
  onSave(){
     let url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';
      // créer un noeud <=> table sql
      url +='personnes.json';
      // get post put delete
      let tab =[
        {prenom:'Bob',nom:'CRUISE'},
        {prenom:'tom',nom:'CRUISE'},
        {prenom:'jane',nom:'DOE'}
      ];
     this.http.put(url,tab).subscribe(
       (data)=>{ // j'attend la response de Omdb Api
        //console.log(data)
        console.log('Ecriture ok!');
        console.log(data);
       }
     );
     
  }
  onSave2(){
    let url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';
     // créer un noeud <=> table sql
     url +='clients.json';
     // get post put delete
     let p = {prenom:'Bob',nom:'CRUISE'};
    this.http.post(url,p).subscribe(
      (data)=>{ // j'attend la response de Omdb Api
       //console.log(data)
       console.log('Ecriture ok!');
       console.log(data);
      }
    );
    
 }
  onLecture(){
    let url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';
    // créer un noeud <=> table sql
    url +='personnes.json';
    this.http.get<any[]>(url).subscribe(
      (tableau)=>{ // j'attend la response de Omdb Api
       
       console.log(tableau);
      }
    );
  }
 
  
}
