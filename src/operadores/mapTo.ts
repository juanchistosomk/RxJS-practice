// MapTo: Transforma la entrada en una salida especifica
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators'

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
//keyup$.subscribe(res => console.log(res));

const key$ = keyup$.pipe(
    mapTo('Tecla Presionada')    // Convierte la data a el valor nuevo que asignemos
);
key$.subscribe(res => console.log(res));