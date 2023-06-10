import { objectList,apiJoke } from "./api.js";
import { publisherB } from "./publishers.js";

export function changeProductFuntion(i) {
    productList.publishBuild(i)
}
export class productObserver {

    product(datos) {
        this.datos = datos;
        productBuilder(this.datos);
    }
};
const productList = new publisherB();
const observador = new productObserver();
productList.addObserver(observador);

export async function createPage(i) {
    const jkApi = await apiJoke(i)
    jokeonText(jkApi);
    const objApi = await objectList();
    productBuilder(objApi);
}

export function jokeonText(i) {
    const contenerdor = document.getElementById("jokes");
    const add = document.getElementById("text");
    contenerdor.innerText = i.joke;
    add.innerText = i.joke;
}

export function productBuilder(objects) {
    const containerCarrousell = document.getElementById("carouselContainer");
    var product = objects
    containerCarrousell.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
        if (product[i]["position"] === 1) {
            const renew = new objectOndata(product[i]["title"], product[i]["color"], product[i]["id"],product[i]["productID"], product[i]["img"], product[i]["price"])
            renew.createTopproduct()
            renew.renewJoke()
        } else if (product[i]["color"] == "Black") {
            const carro = new objectOndata(product[i]["title"], product[i]["color"], product[i]["id"],product[i]["productID"], product[i]["img"], product[i]["price"])
            carro.createCarrousell()
        }
    }
}


export class objectOndata {
    constructor(title, color, id, productID,img, price) {
        this.title = title;
        this.color = color;
        this.id = id;
        this.productID = productID;
        this.img = img;
        this.price = price;
    }
    renewJoke() {
        const cont = document.getElementById("contentValue");       
        const title = document.getElementById("productTitle");
        const jokeImg = document.getElementById("text");
        const DadImg = document.getElementById("dadImg");
        jokeImg.setAttribute("class", `${this.title}-1 ${this.color}` );
        DadImg.setAttribute("class", `${this.title}-2`);
       

        cont.innerHTML =            `
             <h3 id="productPrice"> Price ${this.price}</h3>`;
    }
    createTopproduct() {
        const container = document.getElementById("blockImage");
        container.innerHTML =
            `
          <img id="${this.id}" src="${this.img}" alt="product" class="productImage" value="${this.productID}" />
         `
    }
    createCarrousell() {
        const container = document.getElementById("carouselContainer");
        container.innerHTML +=
            `<li class="productsImageblock">
                <img src="${this.img}" alt="pillowimage" class="productsImage" id="${this.id}"/>
         </li>`
    }

}

