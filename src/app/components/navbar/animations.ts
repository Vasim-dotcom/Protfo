import { trigger, transition, style, animate } from '@angular/animations';

export const routeFadeAnimation =
  trigger('routeFadeAnimation', [
    transition('* <=> *', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate(
        '400ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      )
    ])
  ]);
