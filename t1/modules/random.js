const randomJoketext = document.querySelector('.randomBlock-button');
export const random = () => {
    fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json"
            }
        })
        .then(joke => joke.json())
        .then(joke => {
            randomJoketext.innerHTML = 
                        `<a href="products.html?${joke.id}" id="${joke.id}" class="text call">${joke.joke}</a>`
        })
};