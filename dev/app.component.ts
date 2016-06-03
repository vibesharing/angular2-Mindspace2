import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        {{Ontest()}}

        <input type ="text" [ngClass]="{red: true}" [value]= "name" (keyup)="onKeyup(inputElement.value)" #inputElement>
        <p>{{values}}</p>
        <br>
        <input type="text" value="" [(ngModel)]="name">
        <p>
            Your Name: {{name}}
        </p>
    `,
})
export class AppComponent {
    name = 'Maw';
    values = '';
    Ontest(){
        return 1 === 1;
    }
onKeyup(value: string){
    this.values += value + '|';

}
}
