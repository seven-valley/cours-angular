import { Idea } from "../models/idea";

export class IdeaService{
    ideas:Idea[]=[];
    /*
    ajouter(idea:Idea){
        this.ideas.push(idea);
    }
    */
    ajouter(nom:string){
        this.ideas.push(new Idea(nom));
    }
    changer(i:number){
        this.ideas[i].aller = !this.ideas[i].aller;
    }
    changerAll(){
        for(let idea of this.ideas){
            idea.aller=true;
        }
    }

}