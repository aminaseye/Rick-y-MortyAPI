import { Episode } from "./types/Episodes";
import { getSingleCharacter, getEpisodes } from "./utils/API.js";
import { getLocation } from "./utils/API.js";
 window.addEventListener("load", init);
const mainContainer = document.querySelector("#mainContainer");
 const asideEpisode = document.querySelector("#asideEpisode");

function init() {
    addEpisodes();
    

}

// async function addCharacters(){ 
//     const characterList = document.querySelector("#characterList");
//     const characters = await getCharacters();
   
//     characters.forEach((char)=> {
//         const characterCard = document.createElement("div"); 
//         const characterCardTitle = document.createElement("h3");
//         const characterCardTitleTxt = document.createTextNode(char.name);
//         characterCardTitle.appendChild(characterCardTitleTxt);

//         const characterImg = document.createElement("img");
//         characterImg.src = char.image;
//         characterImg.alt= `${char.name} Image `;
//         characterImg.addEventListener("click", sayAlt);

//         characterCard.appendChild(characterCardTitle);
//         characterCard.appendChild(characterImg);

//         characterList!.appendChild(characterCard);


        // console.log(char);
    // });
    
//     function sayAlt(this: HTMLImageElement, event: Event){
        
//         console.log(this.alt);

//     }
//     // console.log(characters);

// }
async function addEpisodes() {
   const episodes = await getEpisodes();

    episodes.forEach((episode) => { 
    const episodeLink = document.createElement("button");
    episodeLink.innerText = episode.name;
    

    episodeLink.addEventListener("click",()=>{
       openEpisodeContainer(episode);
        // abrir contenedor del episodio concreto
    })
    asideEpisode!.appendChild(episodeLink);
    
   });

}
// addEpisodes();

function openEpisodeContainer(epi:Episode){
    mainContainer?.replaceChildren();
const episode = epi;

const episodeContainer  = document.createElement("div");
const name = document.createElement("h1");
const airDate = document.createElement("p");
const episodeCode = document.createElement("h1");
const characterButtonsContainer = document.createElement("div");
const characters  = episode.characters;

// episodeContainer.innerText = episode.name;
name.innerText = episode.name;
airDate.innerText = episode.air_date;
episodeCode.innerText = `${episode.id}`;

characters.forEach((char) => {
   createCharacterCard(char, characterButtonsContainer);   

});

episodeContainer.appendChild(name);
episodeContainer.appendChild(airDate);
episodeContainer.appendChild(episodeCode);
episodeContainer.appendChild(characterButtonsContainer);

mainContainer!.appendChild(episodeContainer);
// episodeContainer.innerText = episode.name;

}

async function createCharacterCard(char: string, container:HTMLDivElement){
    const singleCharacter  = await getSingleCharacter(char);
    const characterLink = document.createElement("button");
    const characterContainer = document.createElement("div");
    characterLink.addEventListener("click", ()=>{
     openCharacterModal(char, characterContainer);

       
    })
 

    characterLink.innerText = singleCharacter.name;
    // characterLink.innerText = "species";
    // characterLink.innerText = "gender";



const characterStatus = document.createElement("p");
    characterStatus.innerText =singleCharacter.status;
    
    const characterSpecies = document.createElement("p")
    characterSpecies.innerText = singleCharacter.species;

    

    const characterGender = document.createElement("p")
    characterGender.innerText= singleCharacter.gender;

    const characterImg = document.createElement("img");
    characterImg.innerText = singleCharacter.image;

    container.appendChild(characterLink);
    characterLink.appendChild(characterStatus);
    characterLink.appendChild(characterGender);
    characterLink.appendChild(characterSpecies);
    characterLink.appendChild(characterImg);


}
async function openCharacterModal(char: string, container:HTMLDivElement){
const name = document.createElement("p");
 const openModal = document.createElement("modal")
 openModal.addEventListener("click", ()=> {
console.log("modal abierto");
 })

// cuando aprieto el boton me abre un modal

// ese modal tiene que contener x contenedores para la info

// en esos contenedores voy a poner la info que necesito

// para recoger la info necesito un fetch 

// recojo la info de character y se la pongo a los contenedores
}