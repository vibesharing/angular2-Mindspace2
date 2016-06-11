import {Component} from 'angular2/core';
import {Component1Component} from './component1.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <component-1></component-1>

    `,
    directives: [Component1Component]
})
export class AppComponent {

}
