import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from './template-driven-form.component'
import {DataDrivenFormComponent} from './data-driven-form.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <my-template-driven></my-template-driven>
        <my-data-driven></my-data-driven>
    `,
    directives: [TemplateDrivenFormComponent, DataDrivenFormComponent]
})
export class AppComponent{

}
