import { Injectable } from '@angular/core';

// Clases de datos
import { Lista } from "../class/lista";


@Injectable()
export class ListaTareasService {

    listaTareas: Lista[] = [];

    constructor() {


        let lista1 = new Lista("Lista 1");
        let lista2 = new Lista("Lista 2");
        let lista3 = new Lista("Lista 3");

        this.listaTareas.push(lista1);
        this.listaTareas.push(lista2);
        this.listaTareas.push(lista3);

    }

}