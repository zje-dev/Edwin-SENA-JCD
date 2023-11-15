let number1 = parseFloat(prompt("Inserte el primer numero"))
let number2 = parseFloat(prompt("Inserte el segundo numero"))
let number3 = parseFloat(prompt("Inserte el tercer numero"))
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    if (number1 > number2 && number1 > number3) {
        alert("El primer valor es el mayor")
    } else if (number2 > number1 && number2 > number3) {
        alert("El segundo valor es el mayor")
    } else if (number3 > number1 && number3 > number2) {
        alert("El tercer valor es el mayor")
    } else if (number1 == number2 && number2 == number3) {
        alert("Los numeros son iguales")
    }
} else {
    alert("Uno de los valores ingresados no es un numero")
}