import { Character } from "../types/Characters";
import { Episode } from "../types/Episodes";

const url = "https://rickandmortyapi.com/api";
const urlCharacters = `${url}/character`;
const urlLocation = `${url}/location`;
const urlEpisodes = `${url}/episodes`;

export async function getCharacters(): Promise<Character[]>{
    const response = await fetch(urlCharacters);
    const data = await response.json();
    return data.results;
}

// export default{getCharacters}; 

export async function getLocation(url: String): Promise<Location[]>{
    const response = await fetch(`${urlLocation}`);
    const data = await response.json();
    return data.results;
}
// export {getLocation};
export async function getEpisodes(): Promise<Episode[]>{
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    const data = await response.json();
    return data.results;
}
export async function getSingleCharacter(url: string):Promise<Character>{
    const response = await fetch(url)
    const data = await response.json();
    return data;
}