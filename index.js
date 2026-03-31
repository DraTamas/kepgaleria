import { Kepek } from "./Kepek.js";

function esemenyFigyelo() {
  window.addEventListener("kivalaszt", (e) => {
    console.log("Kiválasztott kép indexe:", e.detail);
  });
}

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
const kepek = new Kepek(lista);
kepek.megjelenit(galeriaElem);
esemenyFigyelo();
