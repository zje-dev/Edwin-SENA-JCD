let number1 = parseFloat(prompt("Inserte el primer numero"))
let number2 = parseFloat(prompt("Inserte el segundo numero"))
if (!isNaN(number1) && !isNaN(number2)) {
    let result = number1 + number2
    alert("Suma "+ result)
} else {
    alert("Uno de los valores ingresados no es un numero")
}