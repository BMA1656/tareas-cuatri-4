const randomJoketext = document.getElementById('randomBlock');
export const random = () => {
    fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json"
            }
        })
        .then(joke => joke.json())
        .then(joke => {
            randomJoketext.innerHTML = 
                        `<a href="products.html?dataValue=${joke.id}" id="text">${joke.joke}</a>`
        })


};