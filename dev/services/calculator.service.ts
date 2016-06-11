import {Injectable} from 'angular2/core';

@Injectable()

export class calculatorService{
  add(num1: number, num2: number){
    console.log(num1 + num2);

    return (num1 + num2);
  };
  multiply(num1: number, num2: number){
    console.log(num1 * num2);

    return (num1 * num2);
  };
}
