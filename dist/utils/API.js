var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://rickandmortyapi.com/api";
const urlCharacters = `${url}/character`;
const urlLocation = `${url}/location`;
const urlEpisodes = `${url}/episodes`;
export function getCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(urlCharacters);
        const data = yield response.json();
        return data.results;
    });
}
export function getLocation(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${urlLocation}`);
        const data = yield response.json();
        return data.results;
    });
}
export function getEpisodes() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://rickandmortyapi.com/api/episode");
        const data = yield response.json();
        return data.results;
    });
}
export function getSingleCharacter(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
