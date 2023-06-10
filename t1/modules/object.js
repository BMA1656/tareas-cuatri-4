import {
    objectList
} from "./api.js"



class buyObjects {
    constructor(title, color, img, id, price, joke) {
        this.title = title;
        this.color = color;
        this.img = img;
        this.id = id;
        this.price = price;
        this.joke = joke;
    }
    write() {
        const listaObjetos = document.getElementById("objectList");
        const objectId = Math.floor(Math.random() * 999) + 1;

        listaObjetos.innerHTML +=
            `<li id="${this.id}${objectId}" class="objectMarketList">
            <p class="${this.title}-1-mini ${this.color}">${this.joke}</p>
            <img src="${this.img}" alt="product" class="marketImage"/>
        <div>
        <h3> ${this.color} ${this.title} with joke</h3>
        <h3>Price:${this.price}</h3>
        <p>Joke: ${this.joke}</p>
        <button class="delete-button button marketErrase" value="${this.id}${objectId}">Delete</button>
        </div>
        </li>`
    }
}

export function deleteLi(liId) {
    const liObject = document.getElementById(liId);
    const parentElement = liObject.parentNode;

    parentElement.removeChild(liObject);
}



export function hideOrShow() {
    const state = document.getElementById("marketBlock");
    if (state.classList.contains("hide")) {
        state.classList.remove("hide");
    } else {
        state.classList.add("hide");
    }
}


export async function getObject() {
    const joke = document.getElementById("jokes").innerText;
    const idenProduct = document.querySelector(".productImage");
    const id = idenProduct.id

    const object = await objectList()
    for (let i = 0; i < object.length; i++) {
        if (object[i]["id"] == id) {
            const objectReady = new buyObjects(object[i]["title"], object[i]["color"], object[i]["img"], object[i]["id"], object[i]["price"], joke);
            objectReady.write()
        }
    }
}
export function clearAll() {
    const container = document.getElementById("objectList");
    container.innerHTML = "";
}