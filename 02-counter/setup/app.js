const btnDecrease = document.querySelector('.decrease')
const btnReset = document.querySelector('.reset')
const btnIncrease = document.querySelector('.increase')
const numberSpan = document.querySelector('#value')
let number = 0

btnIncrease.addEventListener('click', ()=>{
    number += 1
    numberSpan.innerHTML = number
})

btnDecrease.addEventListener('click', ()=>{
    number -= 1
    numberSpan.innerHTML = number
})

btnReset.addEventListener('click', ()=>{
    number = 0
    numberSpan.innerHTML = number
})
