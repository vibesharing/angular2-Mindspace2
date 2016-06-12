import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {ListItem} from '../list-item';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector:'shopping-list',
  template:`
  <section>
    <shopping-list-new-item class="col-md-4"></shopping-list-new-item>
  </section>

  <section  class="col-md-2">
    <h3>My List</h3>
    <div class="list">
      <ul>
        <li *ngFor="#listItem of ListItems" (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
      </ul>
    </div>
  </section>

  <section *ngIf='selectedItem != null'>
    <shopping-list-item [item]="selectedItem" (removed)="onRemove()" class="offset-md-1 col-md-6"></shopping-list-item>
  </section>
  `,
  directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
  providers: [ShoppingListService],
})

export class shoppingListComponent implements OnInit{
ListItems: Array<ListItem>;
selectedItem: ListItem;
constructor(private _shoppingListService: ShoppingListService){}

onSelect(item: ListItem){
  this.selectedItem = item;
}
ngOnInit():any {
  this.ListItems = this._shoppingListService.getItems();
}
onRemove(){
  this.selectedItem = null;
}
}
