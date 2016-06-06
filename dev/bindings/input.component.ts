import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-input',
  template: `

<h2>Your Details</h2>
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
<button type="v" name="button" [disabled]='!isValid' (click)='onSubmit()'>Submit</button>
  `,
  inputs: ['myself'],
  outputs: ['submitted']

})

export class InputComponent{
  myself = {name: '', age: ''};
  isFilled = false;
  isValid = false;
  submitted = new EventEmitter<{name: string, age: string}>();

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
onSubmit(){
  this.submitted.emit(this.myself);
}


}
