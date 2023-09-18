//variabler for modal, knap og luk knap

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// klik på opret pip, åbner modal
btn.onclick = function() {
  modal.style.display = "block";
}

// når man klikker på X lukker modal
span.onclick = function() {
  modal.style.display = "none";
}

// når man klikker udenfor modal lukker den
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// antal anslag tastet i text felt

//Variabler for textarea, character-counter og antal anslag tæller elementer
const textAreaElement = document.getElementById("message");
const characterCounterElement = document.getElementById("character-counter");
const typedCharactersElement = document.getElementById("typed-characters");

//definerer maximun anslag for textfeltet
const maximumCharacters = 255;

//keyup eventlistener der lytter til hvilke taster der bliver trykket på
textAreaElement.addEventListener("keyup", (event) => {

//tæller de anslag der er tastet
    const typedCharacters = textAreaElement.value.length;
//if statement der checker for om der er brugt maximun anslag
    if (typedCharacters > maximumCharacters) {
        return false;
    }
//viser hvor mange anslag der er tastet
    typedCharactersElement.textContent = typedCharacters;
});

//importerer script moduler og funktioner
import { imageToBase64 } from "./image-helpers.js";
import { fetchPips, postPip } from "./pip-api.js";
import { createAvatar } from "./create-avatar.js";

const form = document.getElementById("form");


//eventlister på submit knappen og sørger for den ikke reloader siden
form.addEventListener("submit", async (event) => {
  console.log("Hello from Form");
  event.preventDefault();
  const data = new FormData(form);

  const name = data.get("brugernavn");
  console.log(name);

  const pip = data.get("pip");
  console.log(pip);

  const image = data.get("img");
  console.log(image);

  const base64 = await imageToBase64(image);
  console.log(base64);

 // Nyt pip objekt, med brugernavn, pip og billede 
  const newPip = {
    brugernavn: name,
    pip: pip,
    imgToBase64: base64,
    imgUrl: ""
  };

  const x = postPip(newPip);
});

async function load() {
  const body = await fetchPips();

  body.forEach((x) => {
    createAvatar(x);
  });
}

load();

