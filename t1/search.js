export const searchDIV = document.getElementById('searchJoke')
export let dat = '  ';

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
        //     searchDIV.innerText = JSON.stringify(joke.results[0][value]);
        // })

        .then(joke => {
           
                if (joke.results.length > 0) {
                    for (let i = 0; i < joke.results.length; i++) {


                        searchDIV.innerHTML +=
                            `<p class="Jokes"> Joke number ${i+1}: ${joke.results[i]["joke"]}</p>`

                    }
                }

            else{
                searchDIV.innerHTML +=
                `<p class="Jokes not"> Daddy mistake, jokes not found </p>`
            }
        })

}