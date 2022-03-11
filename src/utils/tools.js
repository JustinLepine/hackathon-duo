import axios from "axios";

const tools = {
    // bringing in the API
    getAnime: (id) => axios.get(`https://api.jikan.moe/v4/anime/${id}`),
    getAnimeCharacters: (id) => axios.get(`https://api.jikan.moe/v4/characters/${id}`)

}

export default tools;