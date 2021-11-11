const leters = ['0','1','2','3','4','5','6','7','8','9', 'A', 'B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
var fondo = document.querySelector('.fondo');
var code = '#'

function getRandomNumber(){
    return Math.floor(Math.random()*leters.length); 
}

function hexCode(){
    code = "#"
    for (let i = 0; i < 6 ; i++){
        code += leters[getRandomNumber()]
    }
    return code
}
btn.addEventListener('click', function () {
    
    var hexCodeOk = hexCode();
    const randomNumber = getRandomNumber();
    fondo.style.backgroundColor = hexCodeOk
    color.textContent = hexCodeOk

});


