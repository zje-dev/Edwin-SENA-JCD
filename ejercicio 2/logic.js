let number = parseFloat(prompt("Inserte un numero"))
if (!isNaN(number)) {
    alert("doble: "+(number * 2))
    alert("triple: "+(number * 3))
} else {
    alert("Uno de los valores ingresados no es un numero")
}