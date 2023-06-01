export const builder = () => {

    const searchResult = window.location.search.slice(1);
    const contenerdor = document.getElementById("jokes");
    const add = document.getElementById("text");

    const data = fetch(`https://icanhazdadjoke.com/j/${searchResult}`, {
        headers: {
            Accept: "application/json"
        }
    }).then(joke => joke.json())
    .then(joke => {

        contenerdor.innerText = joke.joke;
        add.innerText = joke.joke;    
    })



}
