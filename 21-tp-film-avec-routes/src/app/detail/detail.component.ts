import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 titre:string='';
 notation:string='';
 img:string='';
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let key: string = 'efdc2275';
    let url: string = 'https://www.omdbapi.com/?apikey=' + key + '&i=' + id;

    this.http.get<any>(url).subscribe(
      (data) => { // j'attend la response de Omdb Api
        console.log(data)
        this.titre = data.Title;
        this.notation = data.Ratings[0].Value;
        this.img = data.Poster;
      }
    );
  }

}
