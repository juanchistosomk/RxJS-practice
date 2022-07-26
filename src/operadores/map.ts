// Map: Transformar la data del observable

import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';


const range$ = range(1,6).pipe(
    map<number, string>(rango => (rango * 10).toString())
);
range$.subscribe(res => console.log(res));


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => console.log(event.code))
);
keyup$.subscribe(res => console.log(res));