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
export async function getEpisodes(url: Number): Promise<Episodes>{
    const resonse = await fetch(urlEpisodes);
    const data = await resonse.json();
    return data.result;
}