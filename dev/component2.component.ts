import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CanDeactivate} from 'angular2/router';
import {ComponentInstruction} from 'angular2/router';

@Component({
    template: `
  <h2>This is Composent 2</h2>
  <button  (click)='onNavigate()'> Component 1</button>`
})

export class Component2Component implements CanDeactivate {
    constructor(private _router: Router) { }
    onNavigate() {
        this._router.navigate(['Component1', { source: 'Component 2' }]);
    }
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        return alert("h");
    }
}
