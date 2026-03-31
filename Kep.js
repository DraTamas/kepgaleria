export class Kep {
    constructor(src, cim, leiras, index) {
        this.src = src;
        this.cim = cim;
        this.leiras = leiras;
        this.index = index;
        this.szuloElem = null;
        this.kepElem = null;
    }

    megjelenit(szuloElem) {
        this.szuloElem = szuloElem;

        this.szuloElem.insertAdjacentHTML("beforeend", `
            <div class="kep">
                <img src="${this.src}" alt="${this.cim}">
                <p>${this.cim}</p>
            </div>
        `);

        this.kepElem = this.szuloElem.lastElementChild;

        this.kepElem.addEventListener("click", () => {
            const esemeny = new CustomEvent("kivalaszt", {
                detail: this.index
            });
            window.dispatchEvent(esemeny);
        });
    }
}