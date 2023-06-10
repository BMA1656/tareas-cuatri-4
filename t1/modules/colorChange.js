import { publisherC } from "./publishers.js";
import {  objectOndata } from "./page.js";
import { objectList } from "./api.js";




export class coloObserver {
    color(datos) {
        this.datos = datos;
        newColor(this.datos);
    }
};

const newcolor = new publisherC();
const observador = new coloObserver();
newcolor.addObserver(observador);

export function changeColor(i) {
    newcolor.publishBuild(i)
}

async function newColor(i) {
    const product = await objectList();
    const variant = document.querySelector(".productImage");
    const idValue = variant.getAttribute("value");
    const colorValue = i;
    
    for (let i = 0; i < product.length; i++) {

        if (product[i]["color"] == `${colorValue}` && product[i]["productID"] == idValue) {
                        const renew = new objectOndata(product[i]["title"], product[i]["color"], product[i]["id"],product[i]["productID"], product[i]["img"], product[i]["price"])
                  renew.createTopproduct()
                  renew.renewJoke()
        }
    }
}