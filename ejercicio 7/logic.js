let number1 = parseFloat(prompt("Inserte el primer numero"))
let number2 = parseFloat(prompt("Inserte el segundo numero"))
let number3 = parseFloat(prompt("Inserte el tercer numero"))
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    let promedium = (number1 + number2 + number3) / 3
    alert("Promedio "+ promedium)
} else {
    alert("Uno de los valores ingresados no es un numero")
}