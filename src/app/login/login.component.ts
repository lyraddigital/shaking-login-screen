import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../router.animations';
import { loginScreenAnimation } from './login.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [loginScreenAnimation(), routerTransition()],
  host: { '[@handleTransition]': '' }
})
export class LoginComponent {
  username: string;
  password: string;
  loginScreenAnimation: string = 'unchecked';

  constructor(private router: Router) {} 

  onSubmit() {
    if (this.username && this.username.trim().length > 5 && this.password && this.password.trim().length > 5) 
    {
      this.router.navigateByUrl('login-success');
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
