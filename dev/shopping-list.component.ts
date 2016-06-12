import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {ListItem} from './list-item';

@Component({
  selector:'shopping-list',
  template:`
  <section>
    <shopping-list-new-item (itemAdded)="onItemAdded($event)" class="col-md-4"></shopping-list-new-item>
  </section>
  <section  class="col-md-2">
    <h3>My List</h3>
    <div class="list">
      <ul>
        <li *ngFor="#listItem of listItems" (click)="onSelect(listItem)">{{listItem.name}}   ({{listItem.amount}})</li>
      </ul>

    </div>
  </section>
  <section *ngIf='selectedItem != null'>
    <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)" class="offset-md-1 col-md-6"></shopping-list-item>
  </section>
  `,
  directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
})

export class shoppingListComponent{
listItems = new Array<ListItem>();
selectedItem: ListItem;




onItemAdded(item: ListItem){
  this.listItems.push({name: item.name, amount: item.amount});
  console.log(this.listItems);
}
onSelect(item: ListItem){
  this.selectedItem= item;
}
onRemove(item: ListItem){
  this.listItems.splice(this.listItems.indexOf(item),1);
  this.selectedItem = null;
}

}
