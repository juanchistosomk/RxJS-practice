// Scan: total acumulado PERO va mostrando lo que acumula
import {scan} from 'rxjs/operators';
import { from } from 'rxjs';

const numbers = [1,2,3,4,5,6,7];
const totalAcumulador = (acum: number, curr: number) => acum + curr;

const scan$ = from(numbers).pipe(
    scan(totalAcumulador,0)
);

scan$.subscribe(res => console.log("subs: ", res));

// Patron REDUX-> Cambio en el Estado de los objetos