import {Component} from 'angular2/core';
import {LoggingService} from './services/logging.service'
import {calculatorService} from './services/calculator.service'

@Component({
  selector: 'component-1',
  template: `
  <div class="">
    <h1>Logging Service</h1>
    <input type="text" #message>
    <button type="button" name="button" (click)="onLog(message.value)">Log</button>

  </div>
  <div class="">
    <h1>calculator service</h1>
    <p>
      Add & multiply
    </p>
    <input type="text" name="name" value="" #num1>
    <input type="text" name="name" value="" #num2>
    <button type="button" name="button" (click)="add(num1.value,num2.value)">Add</button>
    <button type="button" name="button" (click)="multiply(num1.value,num2.value)">Add</button>
  <h4>resutl: {{result}}</h4>

  </div>
  `,
  providers: [LoggingService, calculatorService]

})

export class Component1Component{
  result: string;
  constructor(private _loggingService: LoggingService, private _calculatorService: calculatorService){}
  add(num1: number, num2: number){
    this.result = '' +this._calculatorService.add(+num1, +num2);
  }
  multiply(num1: number, num2: number){
    this.result = '' + this._calculatorService.multiply(num1, num2);
  }
  onLog(message: string){
    this._loggingService.log(message);

  }
}
