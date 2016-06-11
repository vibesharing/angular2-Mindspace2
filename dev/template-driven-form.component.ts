import {Component} from 'angular2/core';

@Component({
  selector:'my-template-driven',
  template:`
      <h2>Sign up form</h2>
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div>
          <label for="mail">Mail</label>
          <input ngControl="email" type="text" id="mail"  required>
        </div>
        <div>
          <label for="password">Password</label>
          <input ngControl="password" type="text" id="password"  required>
        </div>
        <div>
          <label for="confirm-password">Confirm password</label>
          <input ngControl="confirm-password" type="text" id="confirm-password"  required>
        </div>
        <button type="submit">Submit</button>

      </form>

  `
})
export class TemplateDrivenFormComponent{
onSubmit(value){
  console.log(value.value);
}
}
