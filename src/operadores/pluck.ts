// Pluck: Capta la data desde un objeto

import { fromEvent, range } from 'rxjs';
import { map, pluck } from 'rxjs/operators';


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
//keyup$.subscribe(res => console.log(res));

const key$ = keyup$.pipe(
    pluck('key')    // Trae el valor de 'key'
);
key$.subscribe(res => console.log(res));



const baseURL$ = keyup$.pipe(
    pluck('target','baseURI')  // Trae baseURL desde un nivel anterior 'target'
);
baseURL$.subscribe(res => console.log('pluck: ', res));