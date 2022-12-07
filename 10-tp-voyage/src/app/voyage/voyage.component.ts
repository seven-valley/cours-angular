import { Component, Input } from '@angular/core';
import { Idea } from '../models/idea';
import { IdeaService } from '../services/idea.service';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent {
  @Input() idea: Idea = new Idea();
  @Input() indice: number = 0;
  constructor(private service: IdeaService) { }
  onChanger() {
    this.service.changer(this.indice);
  }
}
