import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date1:Date = new Date();
  valeur:number = 456.234;
  test:string = 'off';
  
  onChange():void{
    if (this.test =='on'){
      this.test='off';
    }else{
      this.test='on';
    }
  }
}
