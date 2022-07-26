// Cadenas de operadores: ej Filter y Map

import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


const key$ = fromEvent<KeyboardEvent>(document, 'keyup');

const operadores$ = key$.pipe(
    map(event => event.code),   // KeyboardEvent, String
    filter((val, indice) => {
        console.log("indice: ",indice);
        return val === 'Enter'   // Condición
    })
);

operadores$.subscribe(console.log);
