document.addEventListener('DOMContentLoaded', () => {

    let main = document.querySelector('#main')
    

    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(results => displayCards(results))

    function displayCards(results) {
        const cards = results['data']

        for (let card of cards) {
            const img = document.createElement('img')
            main.appendChild(img)
            console.log(card)
            img.src = card.front
            
            // "/Users/bennyhung/Poker13-PNGs-Reduced/2-Clubs.png"
            
            //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPerzcxj-qSLzgcAYQCDaz1TJzdFv-8gUo_OeXXGc1TS8m8tLqWdJfYYahXUJTqkHr9XZsSy8&usqp=CAc"
        }
    }





})

