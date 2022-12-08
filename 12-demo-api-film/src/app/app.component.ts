import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // http
  constructor(private http:HttpClient){
    // this.http = http;
  }
  ngOnInit(){
    // https://www.omdbapi.com/?apikey=efdc2275&t=star%20wars
    
    let film:string='star wars';
    let key:string='efdc2275';
    let url:string ='https://www.omdbapi.com/?apikey='+key+'&t='+film;
    
    this.http.get<any>(url).subscribe(
      (film)=>{ // j'attend la response de Omdb Api
        console.log(film);
      
      }
    );
    
  }
}
//async await next
//(data) => { console.log(data);}