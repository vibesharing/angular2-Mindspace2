import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-confirm',
  template: `
    <h1>Is it correct</h1>
    <p>
      my name is {{myself.name}} and my age is <span class="highlight">{{myself.age}}</span>
Please click on confirm if you made changes..
    </p>
    <div class="">
      <label for="name">Your name</label>
      <input type="text" id="name" name="name" value="" [(ngModel)]="myself.name" (keyup)='onKeyup()'>

    </div>

    <div class="">
      <label for="age">Your age</label>
      <input type="text" id="age" name="age" value="" [(ngModel)]="myself.age" (keyup)='onKeyup()'>

    </div>

    <div class="">
      Filled out: {{isFilled ? 'Yes': 'No'}}

    </div>
    <div class="">
      Valid out: {{isValid ? 'Yes': 'No'}}

    </div>
    <button type="v" name="button" [disabled]='!isValid' (click)='onConfirm()'>Submit</button>

  `,
  inputs:['myself'],
  outputs: ['confirmed'],

})

export class ConfirmComponent {
  myself = {name: '', age: ''};
  isFilled = false;
  isValid = false;
  confirmed = new EventEmitter<{name: string, age: string}>();

  onKeyup(){
    if (this.myself.name != '' && this.myself.age != '' ){
      this.isFilled = true;

    }
    else
    this.isFilled = false;

  if (this.myself.name != '' && /^\d+$/.test(this.myself.age) ){
    this.isValid = true;

  }
  else
  this.isFilled = false;
}
onConfirm(){
  this.confirmed.emit(this.myself);

}
}
