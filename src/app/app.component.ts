import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('loginScreenAnimation', [
      state('invalid', style({})),
      state('unchecked', style({})),
      state('completed', style({ transform: 'translateX(150%)' })),
      transition('unchecked => invalid', animate(250, keyframes([
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' }),
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' })
      ]))),
      transition('unchecked => completed', animate('1250ms 1s ease-out'))
    ])
  ]
})
export class AppComponent {
  username: string;
  password: string;
  loginScreenAnimation: string = 'unchecked';

  onSubmit() {
    if (this.username && this.username.trim().length > 5 && this.password && this.password.trim().length > 5) 
    {
      this.loginScreenAnimation = 'completed';
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
