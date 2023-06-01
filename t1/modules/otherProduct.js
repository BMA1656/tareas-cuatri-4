

export const change = (z) => {
    
    fetch('./modules/products.json')
        .then(objects => objects.json())
        .then(objects => {

            for (let i = 0; i < objects.length; i++) {

                if (z == objects[i].id) {
                    const renew = new objectOndata(objects[i]["title"], objects[i]["color"], objects[i]["id"], objects[i]["img"],objects[i]["price"])
                    renew.write()
                }

            }
        })


}



class objectOndata {
    constructor(title, color,id, img,price) {
        this.title = title;
        this.color = color;        
        this.id = id;
        this.img = img;
        this.price = price;
    }


    write() {
       
        const container = document.getElementById('prueba');
        const title = document.getElementById("productTitle");
        const price = document.getElementById('productPrice')

        container.setAttribute('src', `${this.img}`);
        title.innerText = `${this.title} with Joke`;
        price.innerText = this.price;


    }



}