import { Kep } from "./Kep.js";

export class Kepek {
    constructor(lista) {
        this.lista = lista;
        this.szuloElem = null;
    }

    megjelenit(szuloElem) {
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";

        this.lista.forEach((adat, index) => {
            const kep = new Kep(adat.src, adat.cim, adat.leiras, index);
            kep.megjelenit(this.szuloElem);
        });
    }
}