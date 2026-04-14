import { Kepek } from "./Kepek.js";
import { NagyKep } from "./NagyKep.js";

const lista = [
  {
    src: "kepek/doggo.jpg",
    cim: "Cooked dog",
    leiras: "Cooked dog meme"
  },
  {
    src: "kepek/cinema.jpg",
    cim: "Abszolút filmszínház",
    leiras: "Absolute Cinema",
  },
  {
    src: "kepek/doakes.jpg",
    cim: "Doakes behind wheels",
    leiras: "Sergeant James Doakes",
  },
  {
    src: "kepek/skipper.jpg",
    cim: "Skipper",
    leiras: "cooked eyes"
  },
  {
    src: "kepek/yhorm.jpg",
    cim: "Yhorm the Giant",
    leiras: "Yhorm ds3"
  },
  {
    src: "kepek/artorias.jpg",
    cim: "Artorias The Abysswalker",
    leiras: "Artorias ds1",
  },
];

const galeriaElem = document.getElementById("galeria");
const nagyKepElem = document.getElementById("nagykep");

const kepek = new Kepek(lista);
const nagyKep = new NagyKep();

let aktIndex = 0;

kepek.megjelenit(galeriaElem);

megjelenitNagykep();

window.addEventListener("kivalaszt", (e) => {
  aktIndex = e.detail;
  megjelenitNagykep();
});

function megjelenitNagykep() {
  nagyKep.megjelenit(nagyKepElem, lista[aktIndex]);

  const bal = nagyKepElem.querySelector(".bal");
  const jobb = nagyKepElem.querySelector(".jobb");

  bal.addEventListener("click", () => {
    aktIndex--;
    if (aktIndex < 0) {
      aktIndex = lista.length - 1;
    }
    megjelenitNagykep();
  });

  jobb.addEventListener("click", () => {
    aktIndex++;
    if (aktIndex >= lista.length) {
      aktIndex = 0;
    }
    megjelenitNagykep();
  });
}