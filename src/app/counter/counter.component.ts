import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter1: {{counter}}</h3>
  <button (click)="increaseBy(1)">+</button>
  <button (click)="decreaseBy(1)">-</button>
  <button (click)="reset()">reset</button>
`
})

export class CounterComponent {
  public counter = 10;

  increaseBy(value:number):void{
    this.counter+=value;

  };
  decreaseBy(value:number):void{
    this.counter-=value;
  };
  reset(){
    this.counter=10;
  };
}
