import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
@Component({
  selector: 'my-puzzle',
  template: `
    <section class="setup">
    <p>Enter your name</p>
<input type="text" #name (keyup)="0">
<h1>hoallala</h1>
    </section>
    <section [ngClass]="{
    puzzle: true,
    solved: switch1.value == Switch1Number && switch2.value == Switch2Number && switch3.value == Switch3Number && switch4.value == Switch4Number
  }"
    [ngStyle]="{display: name.value === ''? 'none' : 'block'}">
    <h2> My puzzle |{{ switch1.value == Switch1Number && switch2.value == Switch2Number && switch3.value == Switch3Number && switch4.value == Switch4Number ? 'SOLVED' : 'NOT SOLVED' }}</h2>
    <h4></h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    Switch1: <input type="text" #switch1 (keyup)="0"> <br>
    Switch2: <input type="text" #switch2 (keyup)="0"> <br>
    Switch3: <input type="text" #switch3 (keyup)="0"> <br>
    Switch4: <input type="text" #switch4 (keyup)="0"> <br>

    </section>
    <h2 [hidden]= "switch1.value != Switch1Number || switch2.value != Switch2Number || switch3.value != Switch3Number || switch4.value != Switch4Number"> Congratulations {{name.value}}</h2>
  `,
})
export class PuzzleComponent {
  Switch1Number: number;
  Switch2Number: number;
  Switch3Number: number;
  Switch4Number: number;

  ngOnInit():any {
    this.Switch1Number = Math.round(Math.random());
    this.Switch3Number = Math.round(Math.random());
    this.Switch2Number = Math.round(Math.random());
    this.Switch4Number = Math.round(Math.random());
    console.log(this.Switch1Number, this.Switch2Number, this.Switch3Number , this.Switch4Number)

  }
}
