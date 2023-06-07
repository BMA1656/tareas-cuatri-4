import { objectList } from "./api.js"

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

        listaObjetos.innerHTML +=
            `<li>
        <img src="${this.img}" alt="product" class="marketImage"/>
            <p>${this.title}, Color: ${this.color}, ID: ${this.id}, Price: $${this.price} Joke: ${this.joke}</p>
            
        </li>`
    }
}
export function hideOrShow() {
    var objeto = document.getElementById("marketBlock");
    if (objeto.style.display == "none") {
        objeto.style.display = "block";
    } else {
        objeto.style.display = "none";
    }
}
export async function getObject() {
    const joke = document.getElementById("jokes").innerText;
    const idenProduct = document.querySelector(".productImage");
    const id = idenProduct.id

    const object = await objectList()
    for (let i = 0; i < object.length; i++) {
        if (object[i]["id"] == id) {
            console.log(object[i])

            const objectReady = new buyObjects(object[i]["title"], object[i]["color"], object[i]["img"], object[i]["id"], object[i]["price"], joke);
            objectReady.write()
        }
    }
}
export function clearAll() {
    const container = document.getElementById("objectList");
    container.innerHTML = "";
}