import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export function loginScreenAnimation() {
    return trigger('loginScreenAnimation', [
      state('invalid', style({})),
      state('unchecked', style({})),
      state('completed', style({ transform: 'translateX(150%)' })),
      transition('unchecked => invalid', animate(250, keyframes([
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' }),
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' })
      ])))
    ]);
}