import { interval, timer } from 'rxjs';

// Interval: inicia en 0, no se detiene
// Es asincrono
const interval$ = interval(1000);

// Timer: programar en una fecha espcifica, se detiene
const hoy5 = new Date();  // ahora
hoy5.setSeconds(hoy5.getSeconds()+5);
//const timer$ = timer(2000);
const timer$ = timer(hoy5);

//console.log("Inicio");
interval$.subscribe(int=>{
    //console.log(int);
});
//console.log("Fin");


console.log("Inicio");
timer$.subscribe(timer=>{
    console.log(timer);
    
}, null, () => console.log("Completo!") );
console.log("Fin");