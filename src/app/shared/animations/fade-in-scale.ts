import { animate, group, query, style, transition, trigger } from '@angular/animations';


//Fade-in scale
export const fadeInScaleAnimation = trigger('routeTransition', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: '5rem',
                left: "0",
                width: '100%',
            }),
        ], { optional: true }),
        group([
            query(':leave', [
                style({ opacity: 1}),
                animate('0.5s ease-out', style({ opacity: 0}))
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 }),
                animate('0.5s ease-in', style({ opacity: 1})),
                
            ], { optional: true }),
        ]),
    ]),
]);