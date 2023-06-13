import { Publisher } from "./Publishers.js";
import {  objectOndata } from "./page.js";



export const UsedColor = new Publisher();



export function changeColor(i) {
    UsedColor.publish(i)
}



export async function newColor(color) {
    const requestProductList = await fetch("js/modules/require/products.json");
    const product = await requestProductList.json();


    const variant = document.querySelector(".productImage");
    const idValue = variant.getAttribute("value");
   
    if (color == null) {
        const colorValue = "Black";
        for (let i = 0; i < product.length; i++) {
            if (product[i]["color"] == `${colorValue}` && product[i]["productID"] == idValue) {
                    const newColor = new objectOndata(product[i])
                    newColor.createTopproduct()
            }
        }
    }else{
        const colorValue = color;
        for (let i = 0; i < product.length; i++) {
            if (product[i]["color"] == `${colorValue}` && product[i]["productID"] == idValue) {
                    const newColor = new objectOndata(product[i])
                    newColor.createTopproduct()
            }
        }
    }
   
}