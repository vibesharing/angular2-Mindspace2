import {Component} from 'angular2/core';
import {attributeDirectives} from './attribute-directives.component';

@Component({
    selector: 'my-app',
    template: `
    <p>
        hola
    </p>
    <my-attributes-directives></my-attributes-directives>

    `,
    directives: [attributeDirectives]
})
export class AppComponent {

}
