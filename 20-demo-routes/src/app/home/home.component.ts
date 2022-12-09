import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router){}

  onGoAbout(){
    this.router.navigateByUrl('about');
    //this.router.navigate(['/about']);
  }
  onGoProduit(){
    let num =896;
    this.router.navigate(['/produit',num]);
    
  }
}
