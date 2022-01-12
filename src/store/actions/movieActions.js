import axios from "axios";
import {
    trendingMoviesApiURL, topRatedMovieURL, documentariesMoviesApiURL, comedyMoviesApiURL, horrorMoviesApiURL,
    romanceMoviesApiURL, netflixOriginalsURL, actionMoviesApiURL
} from "../../urls"

export const getTrendingMovies = async () => {
    try {
        const res = await axios.get(trendingMoviesApiURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}

export const getNetflixOriginals = async () => {
    try {
        const res = await axios.get(netflixOriginalsURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}
export const getTopRatedMovies = async () => {
    try {
        const res = await axios.get(topRatedMovieURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}
export const getActionMovies = async () => {
    try {
        const res = await axios.get(actionMoviesApiURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}
export const getComedyMovies = async () => {
    try {
        const res = await axios.get(comedyMoviesApiURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}

export const getHorrorMovies = async () => {
    try {
        const res = await axios.get(horrorMoviesApiURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}
export const getRomanceMovies = async () => {
    try {
        const res = await axios.get(romanceMoviesApiURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}
export const getDocumentariesMovies = async () => {
    try {
        const res = await axios.get(documentariesMoviesApiURL)
        return res.data.results
    } catch (error) {
        console.log(error);
    }
}