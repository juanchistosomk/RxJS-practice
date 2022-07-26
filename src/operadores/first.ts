// First: Completa el observable cuando se cumple validacion de first
import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const mouse$ = fromEvent<MouseEvent>(document,'click');

const first$ = mouse$.pipe(
    tap(console.log),
    map(({ clientX, clientY}) => ({ clientX, clientY}) ),
    first(event => event.clientY >= 150)
);

first$.subscribe({
    next: val => console.log("subs next:", val),
    complete: () => console.log("Completo")
})