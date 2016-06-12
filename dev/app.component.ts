import {Component} from 'angular2/core';
import {ReversePipe} from './reverse.pipe';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <section>
            <h1>Custom Pipe</h1>
            <input type="text" (keyup)='0' #inputCustomPipe>
            <h2>Output: {{inputCustomPipe.value | myReverse}}</h2>
        </section>
    `,
    pipes: [ReversePipe]
})
export class AppComponent {

}
