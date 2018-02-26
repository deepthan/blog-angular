import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
     
        transition('void => *', [
            animate(500, keyframes([
                style({
                    opacity: 0,
                    transform: 'translate3d(0, 100%, 0)',
                    offset: 0
                }),
                style({
                    opacity: 0,
                    transform: 'translate3d(0, 80%, 0)',
                    offset: 0.5
                }),
                style({
                    opacity: 1,
                    transform: 'none',
                    offset: 1
                }),
            ]))
        ])
      
    ])

