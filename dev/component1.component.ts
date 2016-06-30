import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';


@Component({
  template: `
  <h1>this is Component 1</h1>
  <div class="">
    Source was {{source}}

  </div>
  <div class="">
    Optional was {{optional}}

  </div>`
})

export class Component1Component implements OnInit{
  source:string;
  optional: string;
constructor(private _routeParams: RouteParams){}

  ngOnInit():any{
    this.source = this._routeParams.get('source');
    this.optional = this._routeParams.get('optional');

  }

}
