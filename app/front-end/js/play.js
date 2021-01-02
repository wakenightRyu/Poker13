class Play {
    constructor(cards, name) {
        this.cards = cards 
        this.name = name
    }

    isSingle() {
        return ((this.cards.length === 1) ? true : false)
    }

    isPair() {
        return (((this.cards.length === 2) && (this.cards[0].attributes.value === this.cards[1].attributes.value)) ? true : false)
    }

    isTwoPair() {
        return (((this.cards.length === 4) && ( )) ? true : false)
    }



    isValid() {

    }
}







