import {Component, EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core'; /* !!!! important for 2nd way of input*/

@Component({
  selector: 'my-property-binding',
  template:`
  <h2>this is the child component</h2>
  Name:{{name}}
  Age{{age}}
  <h4>My Hobbies</h4>
<input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
  `,
  inputs: ['name:myName'], /*  1st way of input*/
  outputs: ['hobbiesChanged']
})
export class PropertyBindingComponent{
name = '';
@Input('myAge') age = '10'; /*  2nd way of input*/
hobbiesChanged = new EventEmitter<string>();
onHobbiesChanged(hobbies: string){
  this.hobbiesChanged.emit(hobbies);

  }
}
