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
      let p:any = {prenom:'Angelina',nom:'JOLIE'};
     
     this.http.post<any>(url,p).subscribe(
       (data)=>{ // j'attend la response de Omdb Api
        //console.log(data)
       let id = data.name;
        console.log(id);
       }
     );
     
  }
  
  onModif(){
    let url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';
     // créer un noeud <=> table sql
     url +='personnes/-NIq4gdosUJDIiwWbThG.json';
     // get post put delete
     let p:any = {prenom:'Angelina',nom:'JOLIE 2.0'};
    
    this.http.put<any>(url,p).subscribe(
      (data)=>{ // j'attend la response de Omdb Api
       //console.log(data)
      
       console.log(data);
      }
    );
  }
  onEnlever(){
    let url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';
     // créer un noeud <=> table sql
     url +='personnes/-NIq4gdosUJDIiwWbThG.json';
     // get post put delete
     //let p:any = {prenom:'Angelina',nom:'JOLIE 2.0'};
    
    this.http.delete<any>(url).subscribe(
      (data)=>{ // j'attend la response de Omdb Api
       //console.log(data)
      
       console.log(data);
      }
    );
  }
  onLecture(){
    let url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';
    // créer un noeud <=> table sql
    url +='personnes.json';

   this.http.get<any>(url).subscribe(
     (data)=>{
     
      console.log(data);
      // on affiche le nom des attributs
      // de l'objet data
      for (let attr in data){
        // attr= -N54654
        let  id = attr;
        console.log(id);
        // data.attr
        // un objet c'est aussi un tableau
        let p = data[attr];
        console.log(p);
      }
     }
   );
  }
 
  
}
