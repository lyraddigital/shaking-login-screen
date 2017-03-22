import { Component } from '@angular/core';

import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css'],
  animations: [routerTransition()],
  host: {'[@leaveScreen]': ''}
})
export class LoginSuccessComponent { }