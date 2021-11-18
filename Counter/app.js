// set counter
let counter = 0;

// select value and buttons
const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            counter--;
        }else if (styles.contains('increase')){
            counter++;
        }else if(styles.contains('share')){
            try {
                await navigator.share(shareData)
                resultPara.textContent = 'MDN shared successfully'
              } catch(err) {
                resultPara.textContent = 'Error: ' + err
              }
        }else{
            counter = 0;
        }
        if (counter > 0){
            value.style.color = 'green'
        }
        if (counter < 0){
            value.style.color = 'red'
        }
        if (counter == 0){
            value.style.color = 'black'
        }
        value.textContent = counter;
    })
})