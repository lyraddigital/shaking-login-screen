import { trigger, state, style, transition, animate, group } from '@angular/core';

export function routerTransition() {
  return trigger('leaveScreen', [
      state('void', style({position:'fixed', top: '25%', left: '-150%', width:'100%', opacity: 0 }) ),
      state('*', style({ position:'fixed', top: '25%', width:'100%' }) ),
      transition(':enter', 
        [
          group([
            animate('1s ease-out', style({
              transform: 'translateX(150%)'
            })),
            animate('800ms ease-in', style({
              opacity: 1
            }))
          ])
        ]),
      transition(':leave',
        [
          group([
            animate('1s ease-out', style({
              transform: 'translateX(150%)'
            })),
            animate('800ms ease-in', style({
              opacity: 0
            }))
          ])
        ]
      )
    ]);
}