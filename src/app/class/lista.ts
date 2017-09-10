import { ListaItem } from "./ListaItem";

export class Lista {

    nombre: string; // Nombre de la lista
    terminada: boolean // Estará terminada cuando todos esten terminados y se visualiza en otrs pantala
    items: ListaItem[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.terminada = false;
    }

}