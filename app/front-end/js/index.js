document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('#main')
    
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(results => displayCards(results))

    function displayCards(results) {
        const cards = results['data']

        //random 13 cards for current player hand 
        const currentHand = cards.sort(() => Math.random() - Math.random()).slice(0, 13)

        //current hand div wrapper
        const currentHandDiv = document.createElement('div')
        main.appendChild(currentHandDiv)
        currentHandDiv.classList.add("currentHandDiv")
        currentHandDiv.style.marginLeft = "-66px"
        currentHandDiv.style.textAlign = "center"

        for (let card of currentHand) {

            //card div
            const div = document.createElement('div')
            currentHandDiv.appendChild(div)
            div.style.display = "inline-block"
            div.style.marginRight= "-66px"
            div.style.marginTop = "556px"

            //card image
            const img = document.createElement('img')
            div.appendChild(img)
            img.style.height="150px"
            img.src = card.attributes.img_link
            img.value = card.attributes.value
            console.log(img.value)
            
            //card event listener click
            img.addEventListener("click", () => {
                // const highlight = document.createElement('div')
                // div.append(highlight)
                // highlight.classList.add("selected")
                // highlight.style.height = "130px"
                // highlight.style.width = "93px"
                // highlight.style.borderRadius = "4px"
                // highlight.style.backgroundColor = "rgba(0,0,0,.2)"
                // highlight.style.marginTop = "-130px"
                // highlight.style.position = "absolute"
                
                
               
            })
            
        }
    }





})

