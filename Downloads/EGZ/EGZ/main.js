const d1 = document.getElementById("d1")
const d2 = document.getElementById("d2")
const d3 = document.getElementById("d3")
const d4 = document.getElementById("d4")
const d5 = document.getElementById("d5")
function Skrypt()
{
var a = document.getElementById("liczba1").value
d1.style = "background-color: hsl(" + a + ", 100%, 50%)"
d2.style = "background-color: hsl(" + a + ", 80%, 50%)"
d3.style = "background-color: hsl(" + a + ", 60%, 50%)"
d4.style = "background-color: hsl(" + a + ", 40%, 50%)"
d5.style = "background-color: hsl(" + a + ", 20%, 50%)"
}