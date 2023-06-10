import {
    builder,
    updateJoke
} from "./modules/builder.js";
import {
    random
} from "./modules/random.js";
import {
    change
} from "./modules/change.js";
import {
    changeColor
} from "./modules/colorChange.js";
import {
    hideOrShow,
    getObject,
    clearAll,
    deleteLi
} from "./modules/object.js";

window.addEventListener("DOMContentLoaded", builder);

const randombutton = document.querySelectorAll(".randomJoke");
randombutton.forEach((active) => {
    active.addEventListener("click", async () => {
        await random();
        updateJoke();
    })
});

const variant = document.querySelectorAll(".variant-button");
variant.forEach((element) => {
    element.addEventListener("click", () => {
        variant.forEach((item) => {
            item.classList.remove("variant-active");
            item.removeAttribute("disabled");
        });
        element.classList.add("variant-active");
        element.setAttribute("disabled", "disabled");
        const value = element.id
        changeColor(value)
    });
});

const carouselContainer = document.getElementById("carouselContainer");
carouselContainer.addEventListener("click", (event) => {
    if (event.target.matches(".productsImage")) {
        const id = event.target.id;
        change(id)
    }
});

const deleteButtons = document.getElementById("objectList");
deleteButtons.addEventListener("click", (event) => {
    if (event.target.matches(".delete-button")) {
        const object = event.target;
        const objectValue = object.value;
        deleteLi(objectValue);
    }
});




const buttonMarket = document.getElementById("marketButton")
buttonMarket.addEventListener("click", hideOrShow)

const addMarket = document.getElementById("buy")
addMarket.addEventListener("click", () => {
    getObject()
})

const clearAllbutton = document.getElementById("clearAll")
clearAllbutton.addEventListener("click", clearAll)