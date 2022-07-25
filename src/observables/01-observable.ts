import { lastValueFrom, Observable, Observer } from 'rxjs';

// Interface observer
const observer: Observer<any> = {
 next: value => value,
 error: err => console.warn("Error", err),
 complete: () => console.info('Completado')
}

// subscriber = pendiente de emisiones del Observable
// tipar Observable<>
const obs$ = new Observable<string>(subs => {
   subs.next('Hola');
   subs.next('JK');
   subs.next('Hola');
   subs.next('Pedro');

   // Termina la emision y no continua
   subs.complete();

   subs.next('Hola');
   subs.next('JK');
});

//Formas de subscribirse

//obs$.subscribe( console.log );

obs$.subscribe((value) => { 
    console.log("next: ", value)
});

//obs$.subscribe(observer)


//console.log('Hola JUAN!');