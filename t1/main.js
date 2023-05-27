import {random} from "./modules/random.js";
import { search} from "./modules/search.js";
// import { buy } from "./modules/builder.js"



const randombutton = document.getElementById('randomJoke');
const searchbutton = document.getElementById('form');





searchbutton.addEventListener("submit", search);
randombutton.addEventListener("click", random)