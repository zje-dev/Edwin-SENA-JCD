let number = parseFloat(prompt("Inserte un numero"))
if (!isNaN(number)) {
    alert("Cuadrado: "+(number ** 2))
alert("Cubo: "+(number ** 3))
} else {
    alert("Uno de los valores ingresados no es un numero")
}