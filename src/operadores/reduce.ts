// Reduce: total acumulado, Únicamente se obtiene hasta que se COMPLETE el Observable 
// Take: detiene el Interval depues del numero de veces establecido

import { interval } from 'rxjs';
import { tap, reduce, take } from 'rxjs/operators';

const reduce_ = (acum: number, curr: number ) => {
    return acum + curr;
};

const reduce$ = interval(500).pipe(
    take(5),
    tap(val => console.log(val)),
    reduce(reduce_,0)  
)

reduce$.subscribe(console.log);