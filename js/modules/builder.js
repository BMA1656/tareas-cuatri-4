import { apiJoke } from "./api/api.js";
import {  Publisher} from "./Publishers.js";


export const searchJokePrinter = new Publisher();

export async function builder(i) {
    if(i == null){
        const getSearchId = window.location.search.slice(1);
        const jokeFind = await apiJoke(getSearchId);
        searchJokePrinter.publish(jokeFind);
    }
    else{
        const jokeFind = await apiJoke(i);
        searchJokePrinter.publish(jokeFind)
    }  
}

export async function updateJoke() {
    const newJoke = document.getElementById("newJoke");
    const value = newJoke.getAttribute("value");
    builder(value)
}