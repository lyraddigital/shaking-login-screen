import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { Router } from '@angular/router';

import { loginScreenAnimation } from './login.animations';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [loginScreenAnimation(), routerTransition()],
  host: {'[@leaveScreen]': ''}
})
export class LoginComponent {
  username: string;
  password: string;
  loginScreenAnimation: string = 'unchecked';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username && this.username.trim().length > 5 && this.password && this.password.trim().length > 5) 
    {
      this.router.navigateByUrl('login-success');;
    }
    else {
      this.loginScreenAnimation = 'invalid';
    }
  }

  setBackToUnchecked() {
    if(this.loginScreenAnimation === 'invalid') {
      this.loginScreenAnimation = 'unchecked';
    }
  }
}