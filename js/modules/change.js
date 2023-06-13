import {
    Publisher
} from "./Publishers.js";
import {
    objectOndata
} from "./page.js";

export const ChangeProduct = new Publisher();

export async function buildCarroucel(move) {
    const requestProductList = await fetch("js/modules/require/products.json");
    const objects = await requestProductList.json();
    const container = document.getElementById("carouselContainer");
    container.innerHTML = "";
    if (move == null) {
        createProductList(objects);
    } else {
        createProductList(move)
    }
}

function createProductList(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]["position"] === 1) {
            const renew = new objectOndata(data[i]);
            renew.createTopproduct();
        } else if (data[i].color == "Black" && data[i]["position"] == 0) {
            const carrousell = new objectOndata(data[i]);
            carrousell.createCarrousell();
        }
    }
}

export async function change(id) {
    const requestProductList = await fetch("js/modules/require/products.json");
    const move = await requestProductList.json();
    for (let i = 0; i < move.length; i++) {
        if (move[i]["position"] === 1 && move[i]["id"] !== id) {
            move[i].position = 0
        }
        if (move[i]["id"] == id && move[i]["position"] !== 1) {
            move[i].position = 1
        }
    }
    ChangeProduct.publish(move)
}