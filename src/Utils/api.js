import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const headers = {
    Authorizaton: "bearer " + TMDB_TOKEN,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

export const fetchData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url + API_KEY, {
            header: headers,
            params
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

