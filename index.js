const container = document.querySelector('.container')

const getCards = (page) => {
    return fetch('https://api.magicthegathering.io/v1/cards')
        .then(res => res.json())
        .then(data => data.cards)
}


getCards()
    .then(res => res.forEach(e => {
        if(e.imageUrl){
            const img = document.createElement('img')
            img.classList.add('w-60','h-80')
            img.src = e.imageUrl
            container.append(img)
        }

    }))
    
    