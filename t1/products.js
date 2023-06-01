import {
    random
} from "./modules/random.js";
import {
    builder
} from "./modules/products-builder.js";
import { colorEvent,call,} from "./modules/change-product.js";
import { change} from "./modules/otherProduct.js"

const randombutton = document.querySelectorAll('.randomJoke');
document.addEventListener('DOMContentLoaded',builder);






    const event = document.querySelectorAll('.productsImage');
    event.forEach((active) => {
        active.addEventListener("click", () => {
            
            change(active.id)
            
        })
    })





colorEvent();
randombutton.forEach((active) => {
    active.addEventListener("click",() => {
        random();
        setTimeout(call, 1500);
        
    })
});

