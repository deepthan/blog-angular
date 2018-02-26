import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const autoWidth = trigger('autoWidth', [
     
        transition('void => *', [
            animate(1000, keyframes([
                style({
                   width: 0
                }),
                style({
                    width: '*'
                })
            ]))
        ])
      
    ])

