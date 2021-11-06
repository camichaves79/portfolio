document.addEventListener('DOMContentLoaded', () => {
    // console.log('Hello World!')
    const squares = document.querySelectorAll(".grid div")
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1
    var p1 = document.getElementById("myAudio1")
    var p2 = document.getElementById("myAudio2")

    for (var i = 0, len = squares.length; i < len; i++)

        (function (index) {
            // agregar un onclick a todos los cuadros del grid
            squares[i].onclick = function () {
                // si el cuadro inferior esta taken, se le puede poner encima
                if (squares[index + 7].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.remove('slot')
                        squares[index].classList.add('player-one')
                        squares[index].classList.add('unclickable')
                        p1.play()
                        // change the player
                        currentPlayer = 2
                        displayCurrentPlayer.innerHTML = currentPlayer
                    } else if (currentPlayer === 2) {
                        squares[index].classList.add('taken')
                        squares[index].classList.remove('slot')
                        squares[index].classList.add('player-two')
                        squares[index].classList.add('unclickable')
                        p2.play()
                        // change the player
                        currentPlayer = 1
                        displayCurrentPlayer.innerHTML = currentPlayer


                    }
                    // si el cuadro de abajo no está disponible, avisar
                } else alert('Este espacio no está disponible')
            }
        })(i)

    //revisar el tablero para determinar si hay ganador
    function checkBoard() {
        // crear una constante que almacene todos los arrays ganadores
        const winningArrays = [
            [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
            [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
            [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
            [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
            [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
            [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40],[38, 39, 40, 41],
            [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
            [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
            [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
            [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
            [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
            [40, 33, 26, 19], [33, 26, 19, 12], [26, 19, 12, 5],
            [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
            [21, 15, 9, 3], [10, 16, 22, 28], [22, 16, 10, 4],
            [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5],
            [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6],
            [37, 31, 25, 19], [31, 25, 19, 13], [38, 32, 26, 20],
            [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39],
            [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
            [1, 9, 17, 25], [9, 17, 25, 33], [41, 33, 23, 17],
            [10, 18, 26, 34], [2, 10, 18, 26], [3, 11, 19, 27]


        ]

        // console.log(winningArrays.length)

        // tomar los 4 valores de cada uno de los arrays ganadores y ponerlos en los cuadros
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            const square4 = squares[winningArrays[y][3]]



            if (square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')){
                    console.log("gana el 1")
                result.innerHTML = '¡Gana el jugador 1!'
                for (var i = 0, len = squares.length; i < len; i++){
                    squares[i].classList.add('unclickable')
                }
            }

            else if (square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')){

                result.innerHTML = '¡Gana el jugador 2!'
                for (var i = 0, len = squares.length; i < len; i++){
                    squares[i].classList.add('unclickable')
                }

            }


        }




    }

    squares.forEach(square => square.addEventListener('click', checkBoard))









})