import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url: string = 'https://eni-super-appi-default-rtdb.europe-west1.firebasedatabase.app/';

  titre: string = 'harry potter';
  films: any[] = [];
  favoris: any[] = [];

  constructor(private http: HttpClient,private router:Router) {
  }
  ngOnInit() {
    let url = this.url + 'films.json';
    this.http.get<any[]>(url).subscribe(
      (data) => { // j'attend la response de Omdb Api

        if (data != undefined) {
          
          for (let id in data) {
            let f = data[id];
            f.id = id;
            this.favoris.push(f);
          }
        }


      }
    );
  }
  onRecherche() {
    let key: string = 'efdc2275';
    let url: string = 'https://www.omdbapi.com/?apikey=' + key + '&s=' + this.titre;
    this.titre = '';
    this.http.get<any>(url).subscribe(
      (data) => { // j'attend la response de Omdb Api
        //console.log(data)
        this.films = data.Search;
      }
    );

  }
  onAjouter(i: number): void {
    this.favoris.push(this.films[i]);
    this.films.splice(i, 1);
    let url = this.url + 'films.json';
    this.http.post<any>(url, this.films[i]).subscribe(
      (data) => { // j'attend la response de Omdb Api
        console.log('Ecriture ok!');
        this.favoris[this.favoris.length-1].id =data.name;
      }
    );

  }
  onEnlever(i: number): void {
    let url = this.url + 'films/'+this.favoris[i].id+'.json';
    this.http.delete<any>(url).subscribe(
      (data) => { // j'attend la response de Omdb Api
        console.log('Effacer!');
        this.favoris.splice(i, 1);
      }
    );
  }
  onGoFilm(id:number):void{
    this.router.navigate(['/film',id]);
  }

}
