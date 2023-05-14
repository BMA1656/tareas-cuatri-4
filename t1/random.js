export const randomJoke = document.getElementById('text');

export const random = () => {
    fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json"
            }
        })
        .then(data => data.json())
        .then(joke => {
            randomJoke.innerText = joke.joke
        })
  };