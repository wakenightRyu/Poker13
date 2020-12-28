
Card.destroy_all


twoDiamonds = Card.create(name: '2 Diamonds', rank: "2", suite: 'Diamonds', value: 2)

# twodiamonds.front.attach(
#     io: File.open("/Users/bennyhung/Poker13-PNGs-Reduced/2-Diamonds.png"), filename: '2-Diamonds.png', content_type: 'image/png')

twoDiamonds.front.attach(
    io: File.open('./public/images/2-Diamonds.png'), filename: '2-Diamonds.png', content_type: 'image/png')

twoClubs = Card.create(name: '2 Clubs', rank: "2", suite: 'Clubs', value: 2)

twoClubs.front.attach(
    io: File.open('./public/images/2-Clubs.png'), filename: '2-Clubs.png', content_type: 'image/png')