import { objectList } from "./api.js";
import { changeProductFuntion } from "./page.js";

export async function change(id) {
    const wait = await objectList()

    for (let i = 0; i < wait.length; i++) {
        if (wait[i]["position"] === 1 && wait[i]["id"] !== id ) {
            wait[i].position = 0
        }
         if(wait[i]["id"] == id && wait[i]["position"] !== 1 ){
            wait[i].position = 1
        }
    }
    changeProductFuntion(wait)
}

