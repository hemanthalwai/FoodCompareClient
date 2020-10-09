import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  showText = false;

  constructor(private fb: FormBuilder) { }
  loginUser = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }

  get userName() {
    return this.loginUser.get('userName').value;
  }
  public onSubmit() {
    console.log(this.loginUser.status , `loginUser`);
    console.log('Submit clicked', this.loginUser.value);
  }
}
