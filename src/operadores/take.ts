// Take: solo emite los valores a la subscripcion dependiendo el numero

import { range } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const rango$ = range(1,8).pipe(
    tap(val => console.log(val)),
    take(5)
)
rango$.subscribe({
    next: res => console.log("Subs next: ", res),
    complete: () => console.log("Completo")
});