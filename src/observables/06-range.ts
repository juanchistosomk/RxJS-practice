import { asyncScheduler, range } from 'rxjs';

// Range inicia en 0
// asyncScheduler: para ser asincrono

const range$ = range(1,10, asyncScheduler);


console.log("Inicio");
range$.subscribe(rang=>{
    console.log(rang);
});
console.log("Fin");