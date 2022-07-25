import { Observable, Observer, range, Subject } from 'rxjs';

const observer : Observer<any> = {
    next: next => console.log("next: ",next),
    error: error => console.warn(error),
    complete: () =>  console.info('Completado obs')       
}

const interval$ = new Observable<number>(
    subscriber => {
            const intervalo = setInterval(()=>{
            subscriber.next(Math.random());
        }, 1000);

        // Esto se ejecuta al Unsubscribe del Observable
        return () => {
            clearInterval(intervalo);
            console.log("Intervalo destruido");
        }
    }
);

/*
-Casteo Multiple: muchas subs estan sujetas a este Subject con 
LA MISMA INFORMACION.
-Tambien es un observer
-Next, error y complete
*/

// Se crea el Subject y se subscribe al Observable
const subject$ = new Subject<number>()
const  subscription =interval$.subscribe(subject$);

//const subs1 = subject$.subscribe( rnd => console.log("subs1: ",rnd) )
//const subs2 = subject$.subscribe( rnd => console.log("subs2: ",rnd) )

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setInterval(()=>{
    // Los observables emiten data "Cold Observable"
    // Permite INSERTAR data desde Fuera del Observable (HotObservable)
    subject$.next(10);
        
    subject$.complete();

    subscription.unsubscribe();
    console.log("Completado!!");

},4000);

