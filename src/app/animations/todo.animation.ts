import { trigger, state, style, animate, transition } from '@angular/animations';

export const headerTodoAnimation = trigger('headerTodoAnimation', [
    state('void', style({
        opacity: 0,
        transform: 'translateY(-1000px)',
        position: 'absolute',
        zIndex: 1,
    })),
    transition('void => *', [
        animate('1.5s', style({ opacity: 1, transform: 'translateX(0px)', position: 'static', zIndex: 0 }))
    ]),
]);

export const addTodoAnimation = trigger('addTodoAnimation', [
    state('void', style({
        opacity: 0,
        transform: 'translateX(-1000px)',
        position: 'absolute',
        zIndex: 1
    })),
    transition('void => *', [
        animate('1.5s', style({ opacity: 1, transform: 'translateX(0px)', position: 'static', zIndex: 0 }))
    ]),
]);

export const noTodoAnimation = trigger('noTodoAnimation', [
    state('void', style({
        opacity: 0,
        transform: 'translateX(-1000px)',
        position: 'absolute',
        zIndex: 1
    })),
    transition('void => *', [
        animate('1.5s', style({ opacity: 1, transform: 'translateX(0px)', position: 'static', zIndex: 0 }))
    ]),
]);