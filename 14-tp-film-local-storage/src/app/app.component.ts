import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  titre:string='harry potter'; 
  films:any[]=[];
  favoris:any[]=[];

  constructor(private http:HttpClient){
  }
  ngOnInit(){
    if(localStorage.getItem('fav')){
      this.favoris= JSON.parse(localStorage.getItem('fav')+'');
    }
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
    // je stocke sur local storage
    this.films.splice(i,1);
    localStorage.setItem('fav',JSON.stringify(this.favoris));
  }
  onEnlever(i:number):void{
    this.favoris.splice(i,1);
     // je stocke sur local storage
     localStorage.setItem('fav',JSON.stringify(this.favoris));
  }
  
}
