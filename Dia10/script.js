// botones del html y otras opciones pickeables
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
let repartirYEmpezar = document.getElementById("botondeMazo");
repartirYEmpezar.addEventListener("click", function () {
    if(RondaNuero>=1){
        console.log("este boton no sirveeeeeee!!");
    }
    else{
        document.getElementById("pilaDeManoE").style.visibility= "visible";
        document.getElementById("pilaDeManoJ").style.visibility= "visible";
        document.getElementById("textreparte").style.display = "none";
        document.getElementById("loDelCentro").style.textAlign = "end";
        for (let i = 0; i < 6; i=i+1) {
            listCartasMano.push(cartaAlAzar());
            listCartasManoE.push(cartaAlAzar());
        }
        console.log("tu:", listCartasMano);
        console.log("enemigo:", listCartasManoE);
        console.log("cartas restantes del mazo:", todasLasCartas);
    }
});
let verManito = document.getElementById("pilaDeManoJ");
verManito.addEventListener("click",function (){
    document.getElementById("vercartasdemano").style.display= "block";
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("cartucasEnMano");
        division.innerHTML += `
            <div id="card${i+1}">
            <img src="https://deckofcardsapi.com/static/img/${idCarta}.png" alt="">
            </div>
            `
        }
    }
);
let salirmanito = document.getElementById("vercartasdemano");
salirmanito.addEventListener ("click",function(){
    document.getElementById("vercartasdemano").style.display= "none";
    document.getElementById("cartucasEnMano").innerHTML=``;
})
let movAlH = document.getElementById("movHINDR");
movAlH.addEventListener ("click",function(){
    document.getElementById("vercartasdemano").style.display= "block";
    document.getElementById("botonesdemoverh").style.display = "block";
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("cartucasEnMano");
        division.innerHTML += `
            <div id="card${i+1}">
            <img src="https://deckofcardsapi.com/static/img/${idCarta}.png" alt="">
            </div>
            `
        }
    }
)
let verHINDR = document.getElementById("botondehindr");
verHINDR.addEventListener("click", function () {
    document.getElementById("verCartasHindr").style.display= "block";
    for (let i=0; i<listCartasHINDR.length; i=i+1){
        const idCarta =(listCartasHINDR[i]["code"]);
        let division = document.getElementById("cartucasHindr");
        division.innerHTML += `
            <div id="card${i+1}">
            <img src="https://deckofcardsapi.com/static/img/${idCarta}.png" alt="">
            </div>
            `
        }
    }
);
let salirHINDR = document.getElementById("verCartasHindr");
salirHINDR.addEventListener ("click",function(){
    document.getElementById("verCartasHindr").style.display= "none";
    document.getElementById("cartucasHindr").innerHTML=``;
})
let robarDelHindr = document.getElementById("botondehindrE");
robarDelHindr.addEventListener("click",function(){
    if(RondaNuero%3===0){
        listCartasMano.push(robarDPilaHE());
        listCartasManoE.push(elERobaDPilaH());
        console.log("robaste de su pila hindr:",listCartasMano);
        console.log("te ha robado de tu hindr:",listCartasManoE);
        document.getElementById("botondehindrE").style.border = "none";
        document.getElementById("primerEvent").style.display = "none";
        document.getElementById("robarcartica").style.display = "none";
        RondaNuero=RondaNuero+1;
        numronda =document.getElementById("rondas").innerHTML =`<p>RONDA:</p>`
        numronda =document.getElementById("rondas").innerHTML +=`${RondaNuero}`
        document.getElementById("movHINDR").style.display = "block";
        console.log("cartas de mazo:",todasLasCartas);
        console.log("tus cartas:",listCartasMano);
        document.getElementById("ultimaCarta").style.visibility = "visible";
        document.getElementById("ultimaCartaE").style.visibility = "visible";

        if(RondaNuero%5===0){
            document.getElementById("pilaDeManoE").innerHTML=``;
            document.getElementById("pilaDeManoJ").innerHTML=``;
            for (let i=0; i<listCartasMano.length; i=i+1){
                const idCarta =(listCartasMano[i]["code"]);
                let division = document.getElementById("pilaDeManoJ");
                division.innerHTML += `
                <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
                `
            }
            for (let i=0; i<listCartasManoE.length; i=i+1){
                const idCarta =(listCartasManoE[i]["code"]);
                let division = document.getElementById("pilaDeManoE");
                division.innerHTML += `
                <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
                `
            }
        }
    }
});
let verManoE = document.getElementById("pilaDeManoE");
verManoE.addEventListener("click",function (){
    if(RondaNuero%15===0){
        document.getElementById("vercarEnemigo").style.display = "block";
    }
});
//crear las cartas
let todasLasCartas=[];
for(i=2;i<10;i=i+1){
    Htemporal={
        "value": `${i}`,
        "suit": `HEARTS`,
        "code": `${i}H`
    }
    todasLasCartas.push(Htemporal);
}

for(i=2;i<10;i=i+1){
    Stemporal={
        "value": `${i}`,
        "suit": `SPADES`,
        "code": `${i}S`
    }
    todasLasCartas.push(Stemporal);
}

for(i=2;i<10;i=i+1){
    Dtemporal={
        "value": `${i}`,
        "suit": `DIAMONDS`,
        "code": `${i}D`
    }
    todasLasCartas.push(Dtemporal);
}

for(i=2;i<10;i=i+1){
    Ctemporal={
        "value": `${i}`,
        "suit": `CLUBS`,
        "code": `${i}C`
    }
    todasLasCartas.push(Ctemporal);
}

for(i=0;i<4;i=i+1){
    if(i==0){
        const tipe = "H";
        for(j=0;j<3;j=j+1){
            if(j==0){
                const tipe2 = "J";
                Jtemporal={
                    "value": `JACK`,
                    "suit": `HEARTS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Jtemporal={
                    "value": `QUEEN`,
                    "suit": `HEARTS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Jtemporal={
                    "value": `KING`,
                    "suit": `HEARTS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }  
        }
    }
    else if(i==1){
        const tipe = "S";
        for(j=0;j<3;j=j+1){
            if(j==0){
                const tipe2 = "J";
                Jtemporal={
                    "value": `JACK`,
                    "suit": `SPADES`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Qtemporal={
                    "value": `QUEEN`,
                    "suit": `SPADES`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Qtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Ktemporal={
                    "value": `KING`,
                    "suit": `SPADES`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Ktemporal);
            }  
        }
    }
    else if(i==2){
        const tipe = "D";
        for(j=0;j<3;j=j+1){
            if(j==0){
                const tipe2 = "J";
                Jtemporal={
                    "value": `JACK`,
                    "suit": `DIAMONDS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Qtemporal={
                    "value": `QUEEN`,
                    "suit": `DIAMONDS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Qtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Ktemporal={
                    "value": `KING`,
                    "suit": `DIAMONDS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Ktemporal);
            }  
        }
    }
    else if(i==3){
        const tipe = "C";
        for(j=0;j<3;j=j+1){
            if(j==0){
                const tipe2 = "J";
                Jtemporal={
                    "value": `JACK`,
                    "suit": `CLUBS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Qtemporal={
                    "value": `QUEEN`,
                    "suit": `CLUBS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Qtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Ktemporal={
                    "value": `KING`,
                    "suit": `CLUBS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Ktemporal);
            }  
        }
    }
}

for(i=0;i<4;i=i+1){
    if(i==0){
        AStemporal={
            "value": `AS`,
            "suit": `HEARTS`,
            "code": `AH`
        }
        todasLasCartas.push(AStemporal);
    }
    else if(i==1){
        AStemporal={
            "value": `AS`,
            "suit": `SPADES`,
            "code": `AS`
        }
        todasLasCartas.push(AStemporal);
    }
    else if(i==2){
        AStemporal={
            "value": `AS`,
            "suit": `DIAMONDS`,
            "code": `AD`
        }
        todasLasCartas.push(AStemporal);
    }
    else if(i==3){
        AStemporal={
            "value": `AS`,
            "suit": `CLUBS`,
            "code": `AC`
        }
        todasLasCartas.push(AStemporal);
    }
}
console.log(todasLasCartas);

// funciones con cartas
let listCartasMano=[];
let listCartasManoE=[];
let listCartasHINDR=[];
let listCartasHINDRE=[];

function cartaAlAzar() {
    const indice = Math.floor(Math.random() * todasLasCartas.length);
    const cartaTem = todasLasCartas[indice];
    todasLasCartas.splice(indice, 1);
    return cartaTem;
}
function movimientoAlAzardelE(){
    const indice = Math.floor(Math.random() * listCartasManoE.length);
    const cartaTem = listCartasManoE[indice];
    listCartasManoE.splice(indice, 1);
    return cartaTem;
}
function robarDPilaHE(){
    const cartaTem = listCartasHINDRE.pop();
    return cartaTem;
}
function elERobaDPilaH(){
    const cartaTem = listCartasHINDR.pop();
    return cartaTem;
}
function robaAlAzarDME(){
    const indice = Math.floor(Math.random() * listCartasManoE.length);
    const cartaTem = listCartasManoE[indice];
    listCartasManoE.splice(indice, 1);
    return cartaTem;
}
function EMRobaDMano(){
    const indice = Math.floor(Math.random() * listCartasMano.length);
    const cartaTem = listCartasMano[indice];
    listCartasMano.splice(indice, 1);
    return cartaTem;
}

// rondas juego jugadores
let RondaNuero=0;

let EmpezarRondas = document.getElementById("botondeMazo");
EmpezarRondas.addEventListener("click", function () {
    if(RondaNuero>=1){
        console.log("deja de intentar...")
    }
    else{
        RondaNuero=RondaNuero+1;
        numronda =document.getElementById("rondas")
        numronda =document.getElementById("rondas").innerHTML +=`${RondaNuero}`
        document.getElementById("movHINDR").style.display = "block";
    }
});
let finalizarYEmpezarNueva = document.getElementById("robarcartica");
finalizarYEmpezarNueva.addEventListener("click", function () {
    if(RondaNuero%5===0){
        document.getElementById("pilaDeManoE").innerHTML=``;
        document.getElementById("pilaDeManoJ").innerHTML=``;
        let divisionj = document.getElementById("pilaDeManoJ");
        divisionj.innerHTML += `
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
        `
        let divisione = document.getElementById("pilaDeManoE");
        divisione.innerHTML += `
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
        `
    }
    document.getElementById("robarcartica").style.display = "none";
    RondaNuero=RondaNuero+1;
    numronda =document.getElementById("rondas").innerHTML =`<p>RONDA:</p>`
    numronda =document.getElementById("rondas").innerHTML +=`${RondaNuero}`
    document.getElementById("movHINDR").style.display = "block";
    console.log("cartas de mazo:",todasLasCartas);
    console.log("tus cartas:",listCartasMano);
});

// funciones de las botones acciones por ronda
// funciones de botones hindr
let carta1 = document.getElementById("deHindr1");
carta1.addEventListener("click", function () {
listCartasHINDR.push(listCartasMano[0]);
listCartasMano.splice(0,1);
document.getElementById("botonesdemoverh").style.display = "none";
document.getElementById("pilaHINDRJ").style.visibility = "visible";
document.getElementById("movHINDR").style.display = "none";
document.getElementById("robarcartica").style.display = "block";
console.log("pila hindr",listCartasHINDR);

listCartasHINDRE.push(movimientoAlAzardelE());
console.log("pila HINDR del enemigo:",listCartasHINDRE);
console.log("el enemigo se des-hizo de una carta:",listCartasManoE);
document.getElementById("pilaHINDRE").style.visibility = "visible";

if(RondaNuero%15===0){
    document.getElementById("tercerEvent").style.display = "block";
    document.getElementById("pilaDeManoE").style.border = "10px solid red";
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    let divisionj = document.getElementById("pilaDeManoJ");
    divisionj.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    let divisione = document.getElementById("pilaDeManoE");
    divisione.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    document.getElementById("ultimaCarta").style.display = "none";
    document.getElementById("ultimaCartaE").style.display = "none";
}
else if(RondaNuero%5===0){
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
    for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
}
else if(RondaNuero%3===0){
    document.getElementById("primerEvent").style.display = "block";
    document.getElementById("botondehindrE").style.border = "10px solid red";
    document.getElementById("ultimaCarta").style.visibility = "hidden";
    document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
else if(RondaNuero%1===0){
   document.getElementById("ultimaCarta").style.visibility = "hidden";
   document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
});
let carta2 = document.getElementById("deHindr2");
carta2.addEventListener("click", function () {
listCartasHINDR.push(listCartasMano[1]);
listCartasMano.splice(1,1);
document.getElementById("botonesdemoverh").style.display = "none";
document.getElementById("pilaHINDRJ").style.visibility = "visible";
document.getElementById("movHINDR").style.display = "none";
document.getElementById("robarcartica").style.display = "block";
console.log("pila hindr",listCartasHINDR);

listCartasHINDRE.push(movimientoAlAzardelE());
console.log("pila HINDR del enemigo:",listCartasHINDRE);
console.log("el enemigo se des-hizo de una carta:",listCartasManoE);
document.getElementById("pilaHINDRE").style.visibility = "visible";

if(RondaNuero%15===0){
    document.getElementById("tercerEvent").style.display = "block";
    document.getElementById("pilaDeManoE").style.border = "10px solid red";
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    let divisionj = document.getElementById("pilaDeManoJ");
    divisionj.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    let divisione = document.getElementById("pilaDeManoE");
    divisione.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    document.getElementById("ultimaCarta").style.display = "none";
    document.getElementById("ultimaCartaE").style.display = "none";
}
else if(RondaNuero%5===0){
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
    for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
}
else if(RondaNuero%3===0){
    document.getElementById("primerEvent").style.display = "block";
    document.getElementById("botondehindrE").style.border = "10px solid red";
    document.getElementById("ultimaCarta").style.visibility = "hidden";
    document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
else if(RondaNuero%1===0){
   document.getElementById("ultimaCarta").style.visibility = "hidden";
   document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
});
let carta3 = document.getElementById("deHindr3");
carta3.addEventListener("click", function () {
listCartasHINDR.push(listCartasMano[2]);
listCartasMano.splice(2,1);
document.getElementById("botonesdemoverh").style.display = "none";
document.getElementById("pilaHINDRJ").style.visibility = "visible";
document.getElementById("movHINDR").style.display = "none";
document.getElementById("robarcartica").style.display = "block";
console.log("pila hindr",listCartasHINDR);

listCartasHINDRE.push(movimientoAlAzardelE());
console.log("pila HINDR del enemigo:",listCartasHINDRE);
console.log("el enemigo se des-hizo de una carta:",listCartasManoE);
document.getElementById("pilaHINDRE").style.visibility = "visible";

if(RondaNuero%15===0){
    document.getElementById("tercerEvent").style.display = "block";
    document.getElementById("pilaDeManoE").style.border = "10px solid red";
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    let divisionj = document.getElementById("pilaDeManoJ");
    divisionj.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    let divisione = document.getElementById("pilaDeManoE");
    divisione.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    document.getElementById("ultimaCarta").style.display = "none";
    document.getElementById("ultimaCartaE").style.display = "none";
}
else if(RondaNuero%5===0){
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
    for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
}
else if(RondaNuero%3===0){
    document.getElementById("primerEvent").style.display = "block";
    document.getElementById("botondehindrE").style.border = "10px solid red";
    document.getElementById("ultimaCarta").style.visibility = "hidden";
    document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
else if(RondaNuero%1===0){
   document.getElementById("ultimaCarta").style.visibility = "hidden";
   document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
});
let carta4 = document.getElementById("deHindr4");
carta4.addEventListener("click", function () {
listCartasHINDR.push(listCartasMano[3]);
listCartasMano.splice(3,1);
document.getElementById("botonesdemoverh").style.display = "none";
document.getElementById("pilaHINDRJ").style.visibility = "visible";
document.getElementById("movHINDR").style.display = "none";
document.getElementById("robarcartica").style.display = "block";
console.log("pila hindr",listCartasHINDR);

listCartasHINDRE.push(movimientoAlAzardelE());
console.log("pila HINDR del enemigo:",listCartasHINDRE);
console.log("el enemigo se des-hizo de una carta:",listCartasManoE);
document.getElementById("pilaHINDRE").style.visibility = "visible";

if(RondaNuero%15===0){
    document.getElementById("tercerEvent").style.display = "block";
    document.getElementById("pilaDeManoE").style.border = "10px solid red";
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    let divisionj = document.getElementById("pilaDeManoJ");
    divisionj.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    let divisione = document.getElementById("pilaDeManoE");
    divisione.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    document.getElementById("ultimaCarta").style.display = "none";
    document.getElementById("ultimaCartaE").style.display = "none";
}
else if(RondaNuero%5===0){
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
    for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
}
else if(RondaNuero%3===0){
    document.getElementById("primerEvent").style.display = "block";
    document.getElementById("botondehindrE").style.border = "10px solid red";
    document.getElementById("ultimaCarta").style.visibility = "hidden";
    document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
else if(RondaNuero%1===0){
   document.getElementById("ultimaCarta").style.visibility = "hidden";
   document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
});
let carta5 = document.getElementById("deHindr5");
carta5.addEventListener("click", function () {
listCartasHINDR.push(listCartasMano[4]);
listCartasMano.splice(4,1);
document.getElementById("botonesdemoverh").style.display = "none";
document.getElementById("pilaHINDRJ").style.visibility = "visible";
document.getElementById("movHINDR").style.display = "none";
document.getElementById("robarcartica").style.display = "block";
console.log("pila hindr",listCartasHINDR);

listCartasHINDRE.push(movimientoAlAzardelE());
console.log("pila HINDR del enemigo:",listCartasHINDRE);
console.log("el enemigo se des-hizo de una carta:",listCartasManoE);
document.getElementById("pilaHINDRE").style.visibility = "visible";

if(RondaNuero%15===0){
    document.getElementById("tercerEvent").style.display = "block";
    document.getElementById("pilaDeManoE").style.border = "10px solid red";
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    let divisionj = document.getElementById("pilaDeManoJ");
    divisionj.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    let divisione = document.getElementById("pilaDeManoE");
    divisione.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    document.getElementById("ultimaCarta").style.display = "none";
    document.getElementById("ultimaCartaE").style.display = "none";
}
else if(RondaNuero%5===0){
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
    for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
}
else if(RondaNuero%3===0){
    document.getElementById("primerEvent").style.display = "block";
    document.getElementById("botondehindrE").style.border = "10px solid red";
    document.getElementById("ultimaCarta").style.visibility = "hidden";
    document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
else if(RondaNuero%1===0){
   document.getElementById("ultimaCarta").style.visibility = "hidden";
   document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
});
let carta6 = document.getElementById("deHindr6");
carta6.addEventListener("click", function () {
listCartasHINDR.push(listCartasMano[5]);
listCartasMano.splice(5,1);
document.getElementById("botonesdemoverh").style.display = "none";
document.getElementById("pilaHINDRJ").style.visibility = "visible";
document.getElementById("movHINDR").style.display = "none";
document.getElementById("robarcartica").style.display = "block";
console.log("pila hindr",listCartasHINDR);

listCartasHINDRE.push(movimientoAlAzardelE());
console.log("pila HINDR del enemigo:",listCartasHINDRE);
console.log("el enemigo se des-hizo de una carta:",listCartasManoE);
document.getElementById("pilaHINDRE").style.visibility = "visible";

if(RondaNuero%15===0){
    document.getElementById("tercerEvent").style.display = "block";
    document.getElementById("pilaDeManoE").style.border = "10px solid red";
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    let divisionj = document.getElementById("pilaDeManoJ");
    divisionj.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    let divisione = document.getElementById("pilaDeManoE");
    divisione.innerHTML += `
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
    <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
    `
    document.getElementById("ultimaCarta").style.display = "none";
    document.getElementById("ultimaCartaE").style.display = "none";
}
else if(RondaNuero%5===0){
    document.getElementById("pilaDeManoE").innerHTML=``;
    document.getElementById("pilaDeManoJ").innerHTML=``;
    for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
    for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
        <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
        `
    }
}
else if(RondaNuero%3===0){
    document.getElementById("primerEvent").style.display = "block";
    document.getElementById("botondehindrE").style.border = "10px solid red";
    document.getElementById("ultimaCarta").style.visibility = "hidden";
    document.getElementById("ultimaCartaE").style.visibility = "hidden";
}
else if(RondaNuero%1===0){
   document.getElementById("ultimaCarta").style.visibility = "hidden";
   document.getElementById("ultimaCartaE").style.visibility = "hidden";
}});

// funciones de botones robar de la mano
let rbDLaManito1 = document.getElementById("robarDE1");
rbDLaManito1.addEventListener("click",function(){
    if(RondaNuero%15===0){
        listCartasMano.push(robaAlAzarDME());
        listCartasManoE.push(EMRobaDMano());
        document.getElementById("tercerEvent").style.display = "none";
        document.getElementById("vercarEnemigo").style.display = "none";
        document.getElementById("movHINDR").style.display = "block";
        console.log("cartas de mazo:",todasLasCartas);
        console.log("tus cartas:",listCartasMano);
        document.getElementById("ultimaCarta").style.visibility = "visible";
        document.getElementById("ultimaCartaE").style.visibility = "visible";
        document.getElementById("pilaDeManoE").style.border = "none";
    }
});
let rbDLaManito2 = document.getElementById("robarDE2");
rbDLaManito2.addEventListener("click",function(){
    if(RondaNuero%15===0){
        listCartasMano.push(robaAlAzarDME());
        listCartasManoE.push(EMRobaDMano());
        document.getElementById("tercerEvent").style.display = "none";
        document.getElementById("vercarEnemigo").style.display = "none";
        document.getElementById("movHINDR").style.display = "block";
        console.log("cartas de mazo:",todasLasCartas);
        console.log("tus cartas:",listCartasMano);
        document.getElementById("ultimaCarta").style.visibility = "visible";
        document.getElementById("ultimaCartaE").style.visibility = "visible";
        document.getElementById("pilaDeManoE").style.border = "none";
    }
});
let rbDLaManito3 = document.getElementById("robarDE3");
rbDLaManito3.addEventListener("click",function(){
    if(RondaNuero%15===0){
        listCartasMano.push(robaAlAzarDME());
        listCartasManoE.push(EMRobaDMano());
        document.getElementById("tercerEvent").style.display = "none";
        document.getElementById("vercarEnemigo").style.display = "none";
        document.getElementById("movHINDR").style.display = "block";
        console.log("cartas de mazo:",todasLasCartas);
        console.log("tus cartas:",listCartasMano);
        document.getElementById("ultimaCarta").style.visibility = "visible";
        document.getElementById("ultimaCartaE").style.visibility = "visible";
        document.getElementById("pilaDeManoE").style.border = "none";
    }
});
let rbDLaManito4 = document.getElementById("robarDE4");
rbDLaManito4.addEventListener("click",function(){
    if(RondaNuero%15===0){
        listCartasMano.push(robaAlAzarDME());
        listCartasManoE.push(EMRobaDMano());
        document.getElementById("tercerEvent").style.display = "none";
        document.getElementById("vercarEnemigo").style.display = "none";
        document.getElementById("movHINDR").style.display = "block";
        console.log("cartas de mazo:",todasLasCartas);
        console.log("tus cartas:",listCartasMano);
        document.getElementById("ultimaCarta").style.visibility = "visible";
        document.getElementById("ultimaCartaE").style.visibility = "visible";
        document.getElementById("pilaDeManoE").style.border = "none";
    }
});
let rbDLaManito5 = document.getElementById("robarDE5");
rbDLaManito5.addEventListener("click",function(){
    if(RondaNuero%15===0){
        listCartasMano.push(robaAlAzarDME());
        listCartasManoE.push(EMRobaDMano());
        document.getElementById("tercerEvent").style.display = "none";
        document.getElementById("vercarEnemigo").style.display = "none";
        document.getElementById("movHINDR").style.display = "block";
        console.log("cartas de mazo:",todasLasCartas);
        console.log("tus cartas:",listCartasMano);
        document.getElementById("ultimaCarta").style.visibility = "visible";
        document.getElementById("ultimaCartaE").style.visibility = "visible";
        document.getElementById("pilaDeManoE").style.border = "none";
    }
});

let robarCartica = document.getElementById("robarcartica");
robarCartica.addEventListener("click", function () {
    listCartasMano.push(cartaAlAzar());
    document.getElementById("ultimaCarta").style.visibility = "visible";
    console.log("(haz robado una carta) tus cartas:",listCartasMano);

    listCartasManoE.push(cartaAlAzar());
    document.getElementById("ultimaCartaE").style.visibility = "visible";
    console.log("(ha robado una carta) cartas enemigas:",listCartasManoE);

    if(RondaNuero%15===0){
        document.getElementById("pilaDeManoE").innerHTML=``;
        document.getElementById("pilaDeManoJ").innerHTML=``;
        let divisionj = document.getElementById("pilaDeManoJ");
        divisionj.innerHTML += `
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta" id="ultimaCarta"><img src="./img/back_bria.png" class="reversocarta"></div>
        `
        let divisione = document.getElementById("pilaDeManoE");
        divisione.innerHTML += `
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta"><img src="./img/back_bria.png" class="reversocarta"></div>
        <div class="carta" id="ultimaCartaE"><img src="./img/back_bria.png" class="reversocarta"></div>
        `
    }
    else if(RondaNuero%5===0){
        document.getElementById("pilaDeManoE").innerHTML=``;
        document.getElementById("pilaDeManoJ").innerHTML=``;
        for (let i=0; i<listCartasMano.length; i=i+1){
        const idCarta =(listCartasMano[i]["code"]);
        let division = document.getElementById("pilaDeManoJ");
        division.innerHTML += `
            <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
            `
        }
        for (let i=0; i<listCartasManoE.length; i=i+1){
        const idCarta =(listCartasManoE[i]["code"]);
        let division = document.getElementById("pilaDeManoE");
        division.innerHTML += `
            <div class="carta"><img src="https://deckofcardsapi.com/static/img/${idCarta}.png" class="reversocarta"></div>
            `
        }
    }
});