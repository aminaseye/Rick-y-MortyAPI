const url = "https://rickandmortyapi.com/api";
const urlCharacters = `${url}/character`;
const urlLocation = `${url}/location`;

export async function getCharacters(): Promise<Character[]>{
    const response = await fetch(urlCharacters);
    const data = await response.json();
    return data.results;
}

export default{getCharacters}; 

export async function getLocation(): Promise<Location[]>{
    const response = await fetch(`${urlLocation}`);
    const data = await response.json();
    return data.results;
}
// export {getLocation};