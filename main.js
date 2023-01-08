const allDecks = []

let deck1 = `Deck
4 Lunarch Veteran
15 Plains
4 Voice of the Blessed
3 Kayla's Command
4 Inspiring Overseer
4 Steel Seraph
2 The Wandering Emperor
4 Giada, Font of Hope
4 Hopeful Initiate
2 Soul Partition
1 Eiganjo, Seat of the Empire
4 Caves of Koilos
4 Archangel of Wrath
4 Battlefield Forge
1 Cut Down

Sideboard
1 Haywire Mite
1 Spectrum Sentinel
1 Intrepid Adversary
1 Extraction Specialist
1 Union of the Third Path
1 Sigarda's Splendor`

const deck2 = `Deck
3 One with the Multiverse
2 Invoke Despair
3 The World Spell
2 Titan of Industry
2 Titania's Command
3 Deathcap Glade
2 Llanowar Wastes
3 Dreamroot Cascade
2 Yavimaya Coast
3 Shipwreck Marsh
2 Underground River
4 Joint Exploration
4 Cartographer's Survey
2 Portal to Phyrexia
2 Island
3 Swamp
2 Forest
1 Otawara, Soaring City
1 Boseiju, Who Endures
2 Uncharted Haven
3 Go for the Throat
3 Cut Down
4 Life of Toshiro Umezawa
2 Gix's Command`



let finalDeck1 = deck1.replace('Sideboard','').replace('Deck','')
finalDeck1 = finalDeck1.split('\n')
finalDeck1 = finalDeck1.filter(cards => cards !== '')


let finalDeck2 = deck2.replace('Sideboard','').replace('Deck','')
finalDeck2 = finalDeck2.split('\n')
finalDeck2 = finalDeck2.filter(cards => cards !== '')

let shownDeck=[]

allDecks.push(finalDeck1,finalDeck2)
allDecks.forEach((decks)=> {
    decks.forEach(cards=>{
        if(!shownDeck.includes(cards.slice(cards.indexOf(' ')+1))){
            shownDeck.push(cards.slice(cards.indexOf(' ') + 1))
        }
    })
})



console.log(shownDeck);
