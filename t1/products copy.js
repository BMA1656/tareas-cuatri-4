
import { builder } from "./modules/products-builder.js";
import { changeColor,call,} from "./modules/change-product.js";
import { change} from "./modules/otherProduct.js"

const randombutton = document.querySelectorAll(".randomJoke");
document.addEventListener("DOMContentLoaded",builder);

const variant = document.querySelectorAll(".variant-button");

variant.forEach((i, z) => {
        variant[z].addEventListener("click", () => {
            variant.forEach((i, z) => {
                variant[z].classList.remove("variant-active")
                variant[z].removeAttribute("disabled", "")

            })
            variant[z].classList.add("variant-active");
            variant[z].setAttribute("disabled", "")
            changeColor()
        })
    });

randombutton.forEach((active) => {
    active.addEventListener("click",() => {
 call();
        
    })
});

