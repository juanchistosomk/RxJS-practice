// Tap: para DEPURAR los observables. 
// Contiene un Observer ({next,error,complete}).

import { range } from "rxjs";
import { tap, map } from 'rxjs/operators'
const range$ = range(1,6);

range$.pipe(
    tap(valor => console.log("Antes ", valor)),
    map(valor => valor * 10),
    tap({
        next : valor => console.log("Después", valor),
        complete : () => console.log("Finalizado")
    })
).subscribe(console.log);