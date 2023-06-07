const searchResult = window.location.search.slice(1);
import { apiJoke } from "./api.js";
import {  publisher } from "./publishers.js";
import {  createPage } from "./page.js";

async function builder2(i) {
    const jkApi = await apiJoke(searchResult)
    baseJokeid.publishBuild(jkApi.id)
}
export class observer {

    imprimir(datos) {
        this.datos = datos;
        createPage(this.datos);
    }
}
const baseJokeid = new publisher();
const observador = new observer();
baseJokeid.addObserver(observador);

export async function updateJoke() {
    const jkApi = document.getElementById("newJoke");
    const value = jkApi.getAttribute("value");
    baseJokeid.publishBuild(value);
}


export function builder() {
    builder2()
}