const searchDIV = document.getElementById('searchJoke')
let dat = '  ';

export function search(i) {
    searchDIV.innerHTML = " ";
    dat = document.getElementById('value').value;
    i.preventDefault();
    fetch(`https://icanhazdadjoke.com/search?term=${dat}`, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(joke => joke.json())
        // .then(joke => {
        //     searchDIV.innerText = JSON.stringify(joke.results[0]["joke"]);
        // })
        .then(joke => {
                if (joke.results.length > 0) {
                    
                    for (let i = 0; i < joke.results.length; i++) {
                        searchDIV.innerHTML +=
                            `<a class="Jokes" a data-value="${joke.results[i]["id"]}"> Joke number ${i+1}: ${joke.results[i]["joke"]}</a>
                            `;





                            
                    }
                }
            else{
                searchDIV.innerHTML +=
                `<p class="Jokes not"> Daddy mistake, jokes not found </p>
             
                `
            }
        })
}