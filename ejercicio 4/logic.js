let number = parseFloat(prompt("Inserte un numero"))
if (!isNaN(number)) {
    alert("Numero siguiente "+(number+1))
} else {
    alert("Uno de los valores ingresados no es un numero")
}