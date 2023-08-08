import { getCharacters } from "./utils/API.js";
window.addEventListener("load", init);

async function init(){ 
    const characterList = document.querySelector("#characterList");
    const characters = await getCharacters();
    console.log(characters);

}
