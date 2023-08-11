var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getSingleCharacter, getEpisodes } from "./utils/API.js";
window.addEventListener("load", init);
const mainContainer = document.querySelector("#mainContainer");
const asideEpisode = document.querySelector("#asideEpisode");
function init() {
    addEpisodes();
}
function addEpisodes() {
    return __awaiter(this, void 0, void 0, function* () {
        const episodes = yield getEpisodes();
        episodes.forEach((episode) => {
            const episodeLink = document.createElement("button");
            episodeLink.innerText = episode.name;
            episodeLink.addEventListener("click", () => {
                openEpisodeContainer(episode);
            });
            asideEpisode.appendChild(episodeLink);
        });
    });
}
function openEpisodeContainer(epi) {
    mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.replaceChildren();
    const episode = epi;
    const episodeContainer = document.createElement("div");
    const name = document.createElement("h1");
    const airDate = document.createElement("h5");
    const episodeCode = document.createElement("h2");
    const characterButtonsContainer = document.createElement("div");
    const characters = episode.characters;
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
    mainContainer.appendChild(episodeContainer);
}
function createCharacterCard(char, container) {
    return __awaiter(this, void 0, void 0, function* () {
        const singleCharacter = yield getSingleCharacter(char);
        const characterLink = document.createElement("button");
        characterLink.setAttribute("id", "idButton");
        const characterContainer = document.createElement("div");
        characterLink.addEventListener("click", () => {
            openCharacterModal(char, characterContainer);
        });
        characterLink.innerText = singleCharacter.name;
        const characterStatus = document.createElement("p");
        characterStatus.innerText = singleCharacter.status;
        const characterSpecies = document.createElement("p");
        characterSpecies.innerText = singleCharacter.species;
        const characterGender = document.createElement("p");
        characterGender.innerText = singleCharacter.gender;
        const characterImg = document.createElement("img");
        characterImg.innerText = singleCharacter.image;
        container.appendChild(characterLink);
        characterLink.appendChild(characterStatus);
        characterLink.appendChild(characterGender);
        characterLink.appendChild(characterSpecies);
        characterLink.appendChild(characterImg);
    });
}
function openCharacterModal(char, container) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = document.createElement("p");
        const openModal = document.createElement("modal");
        openModal.addEventListener("click", () => {
            console.log("modal abierto");
        });
    });
}
function scrollListener() {
    let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    let maxHeight = document.documentElement.scrollHeight;
    document.documentElement.clientHeight;
    const totalScrolled = scrollPosition * 100 / maxHeight;
}
scrollListener();
