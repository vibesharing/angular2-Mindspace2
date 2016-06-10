import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-attributes-directives',
  template: `
  <div myHighlight>
      <p>Highlight me</p>
  </div>
  <br>
  <br>
  <div myHighlight>
    hola
  </div>
  `,
  directives: [HighlightDirective]
})

export class attributeDirectives{

}
