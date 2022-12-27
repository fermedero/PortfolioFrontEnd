import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string ='';
  password: string='';

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }




}
