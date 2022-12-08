import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  titre:string=''; 
  titreFilm:string='';
  imageFilm:string=''; 
  anneeFilm:string='';
  constructor(private http:HttpClient){
  }
  ngOnInit(){
  }
  onRecherche(){
     
     let key:string='efdc2275';
     let url:string ='https://www.omdbapi.com/?apikey='+key+'&t='+this.titre;
     
     this.http.get<any>(url).subscribe(
       (film)=>{ // j'attend la response de Omdb Api
         this.titreFilm=film.Title;
         this.imageFilm= film.Poster;
         this.anneeFilm =film.Year;
     
       }
     );
     
  }
  onSave(){
    //localStorage.fruit ='pomme';
    localStorage.setItem('fruit','pomme'); // 5octet
    let tab =['rouge','vert','bleu'];
    console.log(JSON.stringify(tab));
    localStorage.setItem('tableau',JSON.stringify(tab)); // je serialize 
    // 20 mo -> 20 millions octets
  }
  onLecture(){
    if (localStorage.getItem('fruit')){
      let fruit=localStorage.getItem('fruit');
      
      console.log(fruit);
    }
    if (localStorage.getItem('tableau')){
      let str:string = localStorage.getItem('tableau')+'';
      let tab2 = JSON.parse(str);
      console.log(tab2);
    }
  }
}
//async await next
//(data) => { console.log(data);}