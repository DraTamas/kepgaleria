export class NagyKep{
    constructor() {
        this.szuloElem = null;
        this.aktIndex = 0;
        this.lista = [];
    }

    megjelenit(szuloElem, adat, lista, index) {
        this.szuloElem = szuloElem;
        this.lista = lista;
        this.aktIndex = index;

        this.szuloElem.innerHTML = `
        <div class="nagykep-container">
            <button class = "bal">&#10094;</button>

            <div class="nagykep">
                <img src="${adat.src}" alt="${adat.cim}">
                <h2>${adat.cim}</h2>
                <p>${adat.leiras}</p>
            </div>

            <button class="jobb">&#10095;</button>
        </div>
        `;
    }
}