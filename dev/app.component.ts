import {Component} from 'angular2/core';
import {shoppingListComponent} from './shopping-list/shopping-list.component'

@Component({
    selector: 'my-app',
    template: `
    <div class="row">
        <h1>Shopping List</h1>
        <hr />

    </div>

        <header>
            <div class="brand">

            </div>
        </header>
        <div class="main">
            <shopping-list></shopping-list>

        </div>

    `,
    directives: [shoppingListComponent]
})
export class AppComponent {

}
