import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  url:string ='https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';

  titre:string='harry potter'; 
  films:any[]=[];
  favoris:any[]=[];

  constructor(private http:HttpClient){
  }
  ngOnInit(){
    let url= this.url +'films.json';
    this.http.get<any[]>(url).subscribe(
      (data)=>{ // j'attend la response de Omdb Api
       
       if (data != undefined){
        this.favoris= data; // undefined
       }
        
 
      }
    );
  }
  onRecherche(){
     let key:string='efdc2275';
     let url:string ='https://www.omdbapi.com/?apikey='+key+'&s='+this.titre;
     this.titre='';
     this.http.get<any>(url).subscribe(
       (data)=>{ // j'attend la response de Omdb Api
        //console.log(data)
        this.films = data.Search;
       }
     );
     
  }
  onAjouter(i:number):void{
    this.favoris.push(this.films[i]);
    this.films.splice(i,1);
    this.saveFire();
  }
  onEnlever(i:number):void{
    this.favoris.splice(i,1);
    this.saveFire();
  }
  saveFire():void{
   let url= this.url +'films.json';
   this.http.put(url,this.favoris).subscribe(
     (data)=>{ // j'attend la response de Omdb Api
      
      console.log('Ecriture ok!');

     }
   );
  }
  
}
