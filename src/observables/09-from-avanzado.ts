import { of, from  } from 'rxjs';

const observer = {
    next: next => console.log('next: ',next),
    complete: () => console.info('complete')

}
// of: toma todo completo
const of$ = of([1,2,3,4,5]);
of$.subscribe(observer)

// from: toma dato x dato
//const from$ = from([1,2,3,4,5]);
const from$ = from(fetch('https://api.github.com/users/klerith'));

from$.subscribe( async(resp) => {
    /// resp.json() retorna una Promesa , por lo se usa async y await
    const data = await resp.json()
    console.log(data);

});
//from$.subscribe(observer)

/*******/
// funcion generadora
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable= miGenerador();
from(miIterable).subscribe(observer);


