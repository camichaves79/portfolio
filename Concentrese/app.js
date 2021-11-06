document.addEventListener('DOMContentLoaded', () => {

    // opciones de cartas
    const cardArray = [
        {
            name: 'bear',
            img: 'images/bear.png'
        },
        {
            name: 'bear',
            img: 'images/bear.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cow',
            img: 'images/cow.png'
        },
        {
            name: 'cow',
            img: 'images/cow.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'goat',
            img: 'images/goat.png'
        },
        {
            name: 'goat',
            img: 'images/goat.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var x = document.getElementById("myAudio")

    // crear el tablero
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {

            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // verificar coincidencias
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('¡Muy bien! ¡Encontraste una pareja!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionOneId].style.pointerEvents = "none"
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].style.pointerEvents = "none"
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].style.pointerEvents = "all"
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].style.pointerEvents = "all"
            alert('¡Lo siento, intenta de nuevo!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {

            resultDisplay.textContent = '¡Felicitaciones! ¡Las encontraste todas!'
            x.play()
        }

    }


    // voltear
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        console.log(cardsChosen)
        cardsChosenId.push(cardId)
        console.log(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        this.style.pointerEvents = "none"
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 50)

        }
    }



    createBoard()



})

