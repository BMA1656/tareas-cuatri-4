import {
    searchJokePrinter
} from "./builder.js";
import {
    ChangeProduct,
    buildCarroucel
} from "./change.js";
import {
    UsedColor,
    newColor
} from "./colorChange.js"

export async function printerPage() {
    searchJokePrinter.addObserver(JokePrinter);
    ChangeProduct.addObserver(buildCarroucel);
    UsedColor.addObserver(newColor)
}

export function changeProductFuntion(i) {
    productList.publishBuild(i)
}

function JokePrinter(jokeFind) {
    const contenerdor = document.getElementById("jokes");
    const add = document.getElementById("text");
    contenerdor.innerText = jokeFind.joke;
    add.innerText = jokeFind.joke;
}

export class objectOndata {
    constructor(product) {
        this.title = product.title;
        this.color = product.color;
        this.id = product.id;
        this.productID = product.productID;
        this.img = product.img;
        this.price = product.price;
    }
    createTopproduct() {
        
        const price = document.getElementById("productPrice")
        const jokeImg = document.getElementById("text");
        const DadImg = document.getElementById("dadImg");
        const title = document.getElementById("productTitle");
        title.innerText = `${this.color} ${this.title} with Joke`;
        jokeImg.setAttribute("class", `${this.title}-1 ${this.color}`);
        DadImg.setAttribute("class", `${this.title}-2`);
        price.innerText = `Price ${this.price}`;


        const img = document.querySelector(".productImage");
        const titleMin = this.title.toLowerCase();
        const colorMin = this.color.toLowerCase();
        const position = this.productID
console.log(position)
        img.src = `./imgs/${titleMin}-${colorMin}.jpg`;
        img.id = `${this.id}`;
        img.setAttribute("value", position);
        


    }

    createCarrousell() {
        const container = document.getElementById("carouselContainer");
        container.innerHTML +=
            `<li class="productsImageblock">
                <img src="${this.img}" alt="pillowimage" class="productsImage" id="${this.id}"/>
         </li>`
    }

}