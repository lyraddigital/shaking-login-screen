import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function loginScreenAnimation() {
    return trigger('loginScreenAnimation', [
      state('invalid', style({})),
      state('unchecked', style({})),
      transition('unchecked => invalid', animate(250, keyframes([
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' }),
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' })
      ])))
    ])
};