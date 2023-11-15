let seconds = parseFloat(prompt("Inserte una cantidad de segundos"))
if (!isNaN(seconds)) {
    alert("Horas: "+((seconds / 60) / 60))
    alert("Minutos: "+(seconds / 60))
} else {
    alert("Uno de los valores ingresados no es un numero")
}