document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('#main')
    
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(results => displayCards(results))

    function displayCards(results) {
        const cards52 = results['data']

        // random 13 cards for current player hand 
        //https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
        
        // ============
        // CURRENT HAND
        // ============
        const currentHand = cards52.sort(() => Math.random() - Math.random()).slice(0, 13)
        //console.log(currentHand)

        // current hand div wrapper
        const currentHandDiv = document.createElement('div')
        main.appendChild(currentHandDiv)
        currentHandDiv.classList.add("current-hand-div")
        currentHandDiv.id = "sortablelist"

        // Sortable JS article: https://www.solodev.com/blog/web-design/how-to-create-sortable-lists-with-sortablejs.stml
        new Sortable(sortablelist, {
            animation: 150,
            ghostClass: 'sortable-ghost'
        });

        for (let card of currentHand) {

            // card div
            const div = document.createElement('div')
            currentHandDiv.appendChild(div)
            div.classList.add("card-div")

            // card image
            const img = document.createElement('img')
            div.appendChild(img)
            img.classList.add("card-image")
            img.src = card.attributes.img_link
            img.value = card.attributes.value
            
            // card event listener click
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

            // card event listener drag & drop 
            div.addEventListener('start', ev => {
            })

            const newCurrentHand = (event, currentHand) => {
                const movedCard = currentHand.find((card,index) => index === event.oldIndex)
                const otherCards = currentHand.filter((card,index) => index !== event.oldIndex)

                const newHandOrder = [
                    ...otherCards.slice(0, event.newIndex), 
                    movedCard, 
                    ...otherCards.slice(event.newIndex)    
                ]

                return newHandOrder
            }












        } // for (let card of currentHand)


        // =============
        // PLAYER 2 HAND
        // =============
        const cards39 = cards52.filter(x => !currentHand.includes(x))

        const player2Hand = cards39.sort(() => Math.random() - Math.random()).slice(0, 13)
        
        let distributedCards = currentHand.concat(player2Hand)
        //console.log(distributedCards)

        // player 2 div wrapper
        const player2HandDiv = document.createElement('div')
        main.appendChild(player2HandDiv)
        player2HandDiv.classList.add("player-2-hand-div")

        for (let card of player2Hand) {

            // card div
            const div = document.createElement('div')
            player2HandDiv.appendChild(div)
            div.classList.add("card-div")
            
            // card image
            const img = document.createElement('img')
            div.appendChild(img)
            img.classList.add("card-image")
            img.src = card.attributes.img_link
            img.value = card.attributes.value

        } // for (let card of player2Hand)


        // =============
        // PLAYER 3 HAND
        // =============
        const cards26 = cards52.filter(x => !distributedCards.includes(x))

        const player3Hand = cards26.sort(() => Math.random() - Math.random()).slice(0, 13)
        
        distributedCards = distributedCards.concat(player3Hand)
        //console.log(distributedCards)

        // player 3 div wrapper
        const player3HandDiv = document.createElement('div')
        main.appendChild(player3HandDiv)
        player3HandDiv.classList.add("player-3-hand-div")

        for (let card of player3Hand) {

            // card div
            const div = document.createElement('div')
            player3HandDiv.appendChild(div)
            div.classList.add("card-div")
            
            // card image
            const img = document.createElement('img')
            div.appendChild(img)
            img.classList.add("card-image")
            img.src = card.attributes.img_link
            img.value = card.attributes.value
            
        } // for (let card of player3Hand)


        // =============
        // PLAYER 4 HAND
        // =============
        const cards13 = cards52.filter(x => !distributedCards.includes(x))

        const player4Hand = cards13
        distributedCards = distributedCards.concat(player4Hand)
    
        // player 4 div wrapper
        const player4HandDiv = document.createElement('div')
        main.appendChild(player4HandDiv)
        player4HandDiv.classList.add("player-4-hand-div")

        for (let card of player4Hand) {

            // card div
            const div = document.createElement('div')
            player4HandDiv.appendChild(div)
            div.classList.add("card-div")
            
            // card image
            const img = document.createElement('img')
            div.appendChild(img)
            img.classList.add("card-image")
            img.src = card.attributes.img_link
            img.value = card.attributes.value
            
            
        } // for (let card of player4Hand)

    } // function displayCards(results)





})

