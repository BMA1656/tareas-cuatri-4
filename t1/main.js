import { random,randomJoke } from "./random.js";
import { search,searchDIV,dat,} from "./search.js";

const randombutton = document.getElementById('randomJoke');
const searchbutton = document.getElementById('form')


searchbutton.addEventListener("submit", search);
randombutton.addEventListener("click", random);
