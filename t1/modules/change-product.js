const event = document.querySelectorAll('.variant-button');

export const colorEvent = () => {
    event.forEach((i, z) => {
        event[z].addEventListener('click', () => {
            event.forEach((i, z) => {
                event[z].classList.remove('variant-active')
                event[z].removeAttribute('disabled', '')

            })
            event[z].classList.add('variant-active');
            event[z].setAttribute('disabled', '')
            changeColor()
        })
    });
}



export const call = () => {

        let newJoke = document.querySelector('.text').textContent;
        let jokeOnproduct = document.getElementById('text');
        let jokesdescription = document.getElementById('jokes');
        jokeOnproduct.innerText = newJoke;
        jokesdescription.innerText = newJoke;
    

}



function changeColor() {
    const image = document.querySelector('.productImage').getAttribute('src')
    const title = document.getElementById('productTitle').textContent
    const titleNew = title
    const search = image
    if (search.includes('black') == true) {

        var newsrc = search.replace('black', 'white')
        var newtt = titleNew.replace('Black', 'White')
        document.getElementById('productTitle').innerText = newtt
        document.querySelector('.productImage').src = newsrc

    } else {
        var newsrc = search.replace('white', 'black')
        var newtt = titleNew.replace('White', 'Black')
        document.getElementById('productTitle').innerText = newtt
        document.querySelector('.productImage').src = newsrc
    }

}