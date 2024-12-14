let n1 = document.getElementById('num1')
let n2 = document.getElementById('num2')
let op = document.getElementById('op')
let button = document.getElementById('result')
let resulted = document.getElementById('showResult')
button.addEventListener('click', () => {
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    let realOp = op.value
    switch(realOp) {
        case '+':
            resulted.innerText = String(num1 + num2)
            break
        case '-':
            resulted.innerText = String(num1 - num2)
            break
        case '*':
            resulted.innerText = String(num1 * num2)
            break
        case '/':
            resulted.innerText = String(num1 / num2)
            break
        default:
            resulted.innerText = 'Operação Invalida'                   
    }
})