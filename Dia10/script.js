// botones del html
let reglitas = document.getElementById("verReglas");
reglitas.addEventListener("click",function (){
    document.getElementById("reglas").style.display= "block";
})
let salirReglitas = document.getElementById("salirReglas");
salirReglitas.addEventListener("click",function (){
    document.getElementById("reglas").style.display= "none";
})
let entrarJugar = document.getElementById("jugar");
entrarJugar.addEventListener("click",function (){
    document.getElementById("tableroJuego").style.display= "block";
})
let salirPartida = document.getElementById("salirDeParida");
salirPartida.addEventListener("click",function (){
    document.getElementById("tableroJuego").style.display= "none";
})