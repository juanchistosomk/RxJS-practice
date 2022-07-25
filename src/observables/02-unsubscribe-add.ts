import { Observable, Observer } from 'rxjs';

const observer : Observer<any> = {
    next: next => console.log("next: ", next),
    error: error => console.warn(error),
    complete: () =>  console.info('Completado Obs')       
}

const obs$ = new Observable<number>((subs) => {
    let contador= 0;
        
   const intervalo =  setInterval(()=> {
    // cada segundo
    contador++;

  subs.next(contador);

    }, 1000);

    setTimeout(()=> {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(intervalo);
        console.log("Intervalo destruido");
    }
});

// Se deben evitar fugas de memoria: generar multiples subscripciones
// y no cerrarlas  

const sub1 = obs$.subscribe(observer);
const sub2 = obs$.subscribe(observer);
const sub3 = obs$.subscribe(observer);

// NOTA: complete <> unsubscribe

// Para evitar multiples unsubscriber

sub1.add(sub2)
sub1.add(sub3);

setInterval(() => {
  sub1.unsubscribe()
  //sub2.unsubscribe()
  //sub3.unsubscribe()
  console.log("Completado!");
}, 6000
)







