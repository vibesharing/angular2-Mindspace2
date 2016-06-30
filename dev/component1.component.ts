import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {Comp1MainComponent} from './comp1-main.component';
import {Comp1SubComponent} from './comp2-sub.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
  <h1>this is Component 1</h1>
  <div class="">
    Source was {{source}}

  </div>
  <div class="">
    Optional was {{optional}}

  </div>
  <div >
    <a [routerLink]="['Component1Main']"> Main</a>
    <a [routerLink]="['Component1Sub']"> Sub</a>


  </div>
  <rooter-outler></rooter-outler>

  `,
  directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
{path:'/', name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true},
{path:'/subroute', name: 'Component1Sub', component: Comp1SubComponent},

])

export class Component1Component implements OnInit{
  source:string;
  optional: string;
constructor(private _routeParams: RouteParams){}

  ngOnInit():any{
    this.source = this._routeParams.get('source');
    this.optional = this._routeParams.get('optional');

  }

}
