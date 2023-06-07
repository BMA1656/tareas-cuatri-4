export const objectList = async () => {
    try {
        const result = await fetch("./modules/products.json");
        const data = await result.json();
        return data
    } catch (error) {
        console.error(error);
    }
};


export const apiJoke = async (i) => {
    try {
        const result = await fetch(`https://icanhazdadjoke.com/j/${i}`, {
            headers: {
                Accept: "application/json"
            }
        });
        const data = await result.json();
        return data
    } catch (error) {
        console.error(error);
    }
}



