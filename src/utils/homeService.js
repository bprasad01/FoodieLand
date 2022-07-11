import axios from "axios";
import { config } from "../config";
import { blogs } from "../config";

// const apiEndPoint = config;
const apiEndPoint = blogs;

export const getAllCategory = () => {
 return axios.get(apiEndPoint + 'getAllCategory');
}


export const getAllReceipe = () => {
    return axios.get(apiEndPoint + 'v1/getAllRecipes')
}

export const getPopularReceipes = () => {
    return axios.get(apiEndPoint + 'popularRecipes');
}