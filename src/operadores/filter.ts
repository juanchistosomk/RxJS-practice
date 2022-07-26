// Filter: Filtra los datos del observable en base a una condición
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

interface Personaje  {
    tipo: string,
    nombre: string
}

const pelicula : Personaje[] = [
    { tipo : 'Heroe', nombre : 'Gordon'},
    { tipo : 'Heroe', nombre : 'Batman'},
    { tipo : 'Villano', nombre : 'Joker'},
];

const filtro$ = from(pelicula).pipe(
    filter((val, indice) => {
        console.log("indice: ",indice);
        return val.tipo === 'Villano'   // Condición
    })
);

filtro$.subscribe(console.log);
