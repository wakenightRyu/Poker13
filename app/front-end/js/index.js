document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('#main')
    let form = document.querySelector('#form')

    // sumbit play button
    const submit = document.createElement('input')
    submit.type = "submit"
    form.appendChild(submit)
    submit.innerText = "Submit Play"
    submit.style.visibility = "hidden"
    submit.classList.add("submit")
    
    // Rails API fetch
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
        let currentHand = cards52.sort(() => Math.random() - Math.random()).slice(0, 13)
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
            img.classList.add("unselected")
            img.src = card.attributes.img_link
            img.value = card.attributes.value
            img.id = card.attributes.name   // necessary to tag card to img to div
            div.id = card.attributes.name   // necessary to tag card to img to div
            card.id = card.attributes.name  // necessary to tag card to img to div
            
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
            // img.value = card.attributes.value

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
            // img.value = card.attributes.value
            
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
            // img.value = card.attributes.value
            
        } // for (let card of player4Hand)
    } // function displayCards(results)

    let selectedDivs = []  // array of selected divs  

    // event listener select cards
    document.addEventListener("click", (e) => {
        let img = e.target

        if (img.classList.contains("unselected")) {
            img.classList.remove("unselected")
            img.classList.add("selected")
            img.style.marginTop = "-70px"  // elevate selected cards

            // submit button appears when 1 card is selected
            setTimeout(submitButtonAppear, 700)
            function submitButtonAppear() {
                submit.style.visibility = "visible"
            }

        } else {
            img.classList.remove("selected")
            img.classList.add("unselected")
            img.style.marginTop = "0px"
        }

        let selectedCards = document.getElementsByClassName("selected")  // HTML collection of selected imgs
        
        for (let img of selectedCards) {
            let div = document.querySelector(`div#${img.id}`)  // finds div of img
            
            console.log(selectedCards)
            console.log(selectedDivs)
            
            if (!selectedDivs.includes(div)) {  // ensures unique array of selected divs
                selectedDivs.push(div)
            }
            
        }

        // event listener submit cards
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            submittedPlay = document.querySelector(".submitted-play")

            if (submittedPlay.length > 0) {
                submittedPlay.forEach(div => submittedPlay.removeChild(div))
            }

            currentHandDiv = document.querySelector(".current-hand-div")
    
            selectedDivs.forEach(div => {
                currentHandDiv.removeChild(div)  // remove selected cards from DOM
                submittedPlay.appendChild(div) 
                div.classList.add("card-div")
                let divIndex = selectedDivs.indexOf(div)
                selectedDivs.splice(divIndex,1)
            })  

            // clear selectedDivs
            console.log(selectedDivs.length)
        })

    })    
    
    

    
    
   
})


    

