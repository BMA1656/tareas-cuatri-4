const searchDIV = document.getElementById("searchJoke")
let dat = "  ";


export function search(i) {
    searchDIV.innerHTML = " ";
    dat = document.getElementById("value").value;
    i.preventDefault();
    fetch(`https://icanhazdadjoke.com/search?term=${dat}`, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(joke => joke.json())
        .then(joke => {
            renewSeachjoke(joke)
        })
}

function renewSeachjoke(joke) {    
    if (joke.results.length > 0) {
        for (let i = 0; i < joke.results.length; i++) {
            searchDIV.innerHTML +=
            `<li class="jokeList" >
                <a class="jokes" a href="products.html?${joke.results[i]["id"]}"> Joke number ${i+1}: ${joke.results[i]["joke"]}</a>
            </li>
                 `
        }
    } else {
        searchDIV.innerHTML +=
            `<li > 
                <p class=" jokeList not"> Daddy mistake, jokes not found </p>
            </li>     
        `
    }    
}