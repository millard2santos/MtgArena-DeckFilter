
const mtg = require('mtgsdk')


// mtg.card.all({subtype: 'dragon'})
// .on('data', function (card) {
//     console.log(card.name)
// });

let x = 1

mtg.card.where({ supertypes: 'legendary', subtypes: 'goblin' })
.then(cards => {
    
})



module.exports = {
    x
}
// const container = document.querySelector('.container')
