document.addEventListener('DOMContentLoaded', () => {
    // console.log('Hello World!')
    const squares = document.querySelectorAll(".grid div")
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i= 0, len = squares.length; i < len; i++)

    (function(index){
        // agregar un onclick a todos los cuadros del grid
        squares[i].onclick = function(){
            // si el cuadro inferior esta taken, se le puede poner encima
            if(squares[index + 7].classList.contains('taken')) {
                if (currentPlayer===1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    // change the player
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer                   
                } else if (currentPlayer === 2){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    // change the player
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer


                }
                // si el cuadro de abajo no está disponible, avisar
            }else alert ('Este espacio no está disponible')
        }
    })(i)

//revisar el tablero para determinar si hay ganador
function chackBoard(){
    // crear una constante que almacene todos los arrays ganadores
    const winningArrays = [
        [0,1,2,3], [1,2,3,4],[2,3,4,5],[3,4,5,6],
        [7,8,9,10], [8,9,10,11], [9,10,11,12], [10,11,12,13],
        [14,15,16,17], [15,16,17,18], [16, 17, 18,19], [17,18,19,20],
        [21,22,23,24], [22,23,24,25], [23,24,25,26], [24,25,26,27],
        [28,29,30,31], [29,30,31,32], [30,31,32,33], [31, 32, 33, 34],
        [35,36,37,38], [36,37,38,39], [37,38,39,40, [38,39,40,41],
        [0,7,14,21], [7,14,21,28], [14, 21, 28, 35],
        [1,8,15,22], [8, 15,22, 29], [15, 22, 29, 36],
        [2,9,16,23], 

    ]

    ]
}









})