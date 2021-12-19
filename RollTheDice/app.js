document.addEventListener('DOMContentLoaded', () => {
    const dado1 = document.getElementById("dado1");
    const dado2 = document.getElementById("dado2");
    const btn = document.getElementById("button")

    btn.addEventListener("click", function rollDice() {
        let valorDado1 = Math.floor(Math.random() * 6 + 1)
        let valorDado2 = Math.floor(Math.random() * 6 + 1)

        switch (valorDado1) {
            case (1):
                dado1.className = "box uno";
                break;
            case (2):
                dado1.className = "box dos"
                break;
            case (3):
                dado1.className = "box tres"
                break;
            case (4):
                dado1.className = "box cuatro"
                break;
            case (5):
                dado1.className = "box cinco"
                break;
            case (6):
                dado1.className = "box seis"
                break;
            default:
                console.log("None1");
        }

        switch (valorDado2) {
            case (1):
                dado2.className = "box uno"
                break;
            case (2):
                dado2.className = "box dos"
                break;
            case (3):
                dado2.className = "box tres"
                break;
            case (4):
                dado2.classLName = "box cuatro"
                break;
            case (5):
                dado2.className = "box cinco"
                break;
            case (6):
                dado2.className = "box seis"
                break;
            default:
                console.log("None2");
        }
    })

});