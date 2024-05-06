alert('Vamos verificar as operações matemáticas: ')
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div.toFixed(2))    
alert('Resto da divisão: ' + restDiv)

if (sum % 2 == 0) {
    alert("A soma dos dois números é um número par");
    } else {
    alert("A soma dos dois números é um número ímpar");
    }

if (firstNumber != secondNumber){
    alert('Os dois números inseridos são diferentes')
    } else{
    alert('Os dois números inseridos são iguais')
    }