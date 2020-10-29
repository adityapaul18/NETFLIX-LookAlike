import axios from "axios";

const instance = axios.create({
    // base url tp make requests
    baseURL: "https://api.themoviedb.org/3",

});

export default instance;