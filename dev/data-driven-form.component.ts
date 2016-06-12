import {Component} from 'angular2/core';
import {FormBuilder} from 'angular2/common';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {Validators} from 'angular2/common';



@Component({
  selector:'my-data-driven',
  template:`
      <h2>Sign up form</h2>
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" >
        <div>
          <label for="mail">Mail</label>
          <input  [ngFormControl]="myForm.controls['email']"type="text" id="mail" #mail='ngForm'>
          <span class="validation-error" *ngIf='!mail.valid'>Not valid</span>
        </div>
        <div>
          <label for="password">Password</label>
          <input  type="text" id="password"[ngFormControl]="myForm.controls['password']"#password='ngForm' >
          <span class="validation-error" *ngIf='!password.valid'>password not valid</span>

        </div>
        <div>
          <label for="confirm-password">Confirm password</label>
          <input  type="text" id="confirm-password" [ngFormControl]="myForm.controls['confirmPassword']"#confirmPassword='ngForm'>
          <span class="validation-error" *ngIf='!confirmPassword.valid'>Confirm password not valid</span>

        </div>
        <button type="submit">Submit</button>

      </form>
      <h2>You submitted</h2>
      <div>Mail: {{user.email}}</div>
      <div>Password: {{user.password}}</div>

  `
})
export class DataDrivenFormComponent implements OnInit{
  myForm: ControlGroup;
    user = {email:'', password:''};
    constructor(private _formBuilder:FormBuilder ){}
    onSubmit(form){
      console.log(this.myForm)
        this.user = this.myForm.value;
        }
    ngOnInit():any {
      this.myForm = this._formBuilder.group({
        'email': ['', Validators.required],
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required],

      });
    }

}
