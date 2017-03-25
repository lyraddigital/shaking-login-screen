import { trigger, state, style, transition, animate, group } from '@angular/animations';

export function routerTransition() {
    return trigger('handleTransition', [
      state('void', style({ position: 'fixed', top: '25%', left: '-150%', width: '100%', opacity: 0})),
      state('*', style({position: 'fixed', top: '25%', width:'100%'})),
      transition(':enter', [
          animate('1s ease-out', style({ transform: 'translateX(150%)', opacity: 1 }))
      ]),
      transition(':leave', [
          animate('1s ease-out', style({ transform: 'translateX(150%)', opacity: 0 }))
      ])
    ]);
}