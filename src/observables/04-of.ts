import { of } from 'rxjs';

//const obs$ = of(1,2,3,4,5,6,7);
// of: muestra todo completo, pero con spreed ... muestra uno a uno
const obs$ = of(...[1,2,3,4,5,6,7]);
// Es SINCRONO

console.log("Inicio OBS$")
obs$.subscribe(
    next => console.log('next: ',next),
    null,
    () => console.log("Terminada la secuencia")    
    );
    console.log("Fin OBS$")