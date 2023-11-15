let number = parseFloat(prompt("Inserte un numero"))
if (!isNaN(number)) {
    if (number % 2 == 0) {
        alert("El valor es par")
    } else {
        alert("El valor es impar")
    }
} else {
    alert("Uno de los valores ingresados no es un numero")
}