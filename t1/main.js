import {
    random
} from "./modules/random.js";
import {
    search
} from "./modules/search.js";

const randombutton = document.querySelectorAll('.randomJoke');
const searchbutton = document.getElementById('form');






randombutton.forEach((active) => {
    active.addEventListener("click",() => {
        random();        
    })
});

searchbutton.addEventListener("submit", search);