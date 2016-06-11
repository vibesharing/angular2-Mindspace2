import {Component} from 'angular2/core';

@Component({
  selector:'shopping-list',
  template:`
  <section>
    New Item
  </section>
  <section>
    <h3>My List</h3>
    <div class="list">
      Output list

    </div>
  </section>
  <section>
    Edit Items
  </section>
  `
})

export class shoppingListComponent{

}
