import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding-component";

@Component({
    selector: 'my-app',
    template: `
    <h1>On t'attend</h1>
<my-property-binding></my-property-binding>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {


}
