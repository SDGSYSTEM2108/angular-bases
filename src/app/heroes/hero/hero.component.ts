import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name:string='Iroman';
 public age:number=45;

 get capitalizedName():string{
  return this.name.toUpperCase();
 }
 getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}
  changeHero():void{
    this.name='Spiderman';
  }
  changeAge():void{
    this.age=25;
  }
  reset():void{
    this.name='Iroman';
    this.age=45;
  }
}
