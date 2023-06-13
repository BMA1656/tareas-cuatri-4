const randomJoketext = document.querySelector(".randomBlock-button");

export const random =  async () => {
        try {
            const result = await fetch(`https://icanhazdadjoke.com/`, {
                headers: {
                    Accept: "application/json"
                }
            });
            const data = await result.json();
            return renewRandomjoke(data)
        } catch (error) {
            console.error(error);
        }
}

;

function renewRandomjoke(joke) {  

    randomJoketext.innerHTML =
        `<a href="products.html?${joke.id}" id="newJoke" value="${joke.id}" class="text call">${joke.joke}</a>`
}