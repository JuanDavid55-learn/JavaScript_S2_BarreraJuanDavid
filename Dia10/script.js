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
let repartircartas = document.getElementById("botondeMazo");
repartircartas.addEventListener("click", function () {
    document.getElementById("pilaDeManoE").style.visibility= "visible";
    document.getElementById("pilaDeManoJ").style.visibility= "visible";
    document.getElementById("datosPartida").style.visibility = "visible";
    document.getElementById("textreparte").style.display = "none";
    for(i=0;i<2;i=i+1){
        if(i==0){
            for(j=0;j<4;j=j+1){
                setTimeout(cartAlAzar);
                listCartasMano.push(CartasTem [0]);
                const eliminar = todasLasCartas.indexOf(CartasTem[0])
                if(eliminar !== -1){
                    todasLasCartas.splice(eliminar,1);
                }
            }
        }
    }
});
CartasTem.push(cartAlAzar());
console.log(listCartasMano);
console.log(CartasTem);

let verManito = document.getElementById("pilaDeManoJ");
verManito.addEventListener("click",function (){
    document.getElementById("vercartasdemano").style.display= "block";
})

//crear las cartas
let todasLasCartas=[];
for(i=2;i<10;i=i+1){
    Htemporal={
        "image": `https://deckofcardsapi.com/static/img/${i}H.png`,
        "value": `${i}`,
        "suit": `HEARTS`,
        "code": `${i}H`
    }
    todasLasCartas.push(Htemporal);
}

for(i=2;i<10;i=i+1){
    Stemporal={
        "image": `https://deckofcardsapi.com/static/img/${i}S.png`,
        "value": `${i}`,
        "suit": `SPADES`,
        "code": `${i}S`
    }
    todasLasCartas.push(Stemporal);
}

for(i=2;i<10;i=i+1){
    Dtemporal={
        "image": `https://deckofcardsapi.com/static/img/${i}D.png`,
        "value": `${i}`,
        "suit": `DIAMONDS`,
        "code": `${i}D`
    }
    todasLasCartas.push(Dtemporal);
}

for(i=2;i<10;i=i+1){
    Ctemporal={
        "image": `https://deckofcardsapi.com/static/img/${i}C.png`,
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
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `JACK`,
                    "suit": `HEARTS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Jtemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `QUEEN`,
                    "suit": `HEARTS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Jtemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
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
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `JACK`,
                    "suit": `SPADES`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Qtemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `QUEEN`,
                    "suit": `SPADES`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Qtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Ktemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
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
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `JACK`,
                    "suit": `DIAMONDS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Qtemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `QUEEN`,
                    "suit": `DIAMONDS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Qtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Ktemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
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
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `JACK`,
                    "suit": `CLUBS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Jtemporal);
            }
            else if(j==1){
                const tipe2 = "Q";
                Qtemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
                    "value": `QUEEN`,
                    "suit": `CLUBS`,
                    "code": `${tipe2}${tipe}`
                }
                todasLasCartas.push(Qtemporal);
            }
            else if(j==2){
                const tipe2 = "K";
                Ktemporal={
                    "image": `https://deckofcardsapi.com/static/img/${tipe2}${tipe}.png`,
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
            "image": `https://deckofcardsapi.com/static/img/AH.png`,
            "value": `AS`,
            "suit": `HEARTS`,
            "code": `AH`
        }
        todasLasCartas.push(AStemporal);
    }
    else if(i==1){
        AStemporal={
            "image": `https://deckofcardsapi.com/static/img/AS.png`,
            "value": `AS`,
            "suit": `SPADES`,
            "code": `AS`
        }
        todasLasCartas.push(AStemporal);
    }
    else if(i==2){
        AStemporal={
            "image": `https://deckofcardsapi.com/static/img/AD.png`,
            "value": `AS`,
            "suit": `DIAMONDS`,
            "code": `AD`
        }
        todasLasCartas.push(AStemporal);
    }
    else if(i==3){
        AStemporal={
            "image": `https://deckofcardsapi.com/static/img/AC.png`,
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
let CartasTem=[];

function cartAlAzar (){
    return todasLasCartas[Math.floor(Math.random()* todasLasCartas.length)];
}

function vercartasDeMano() {
    document.getElementById("vercartasdemano").innerHTML=``;
    const idCartas = JSON.stringify(todasLasCartas);
    console.log(idCartas);
    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/static/img/AC.png${idCartas}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
                        <img src="${daticos["results"][i]["image"]}" alt="">
                        <h3>${daticos["results"][i]["name"]}</h3>
                        <p><strong>Status:</strong>${daticos["results"][i]["status"]}</p>
                        <p><strong>Specie:</strong>${daticos["results"][i]["species"]}</p>
                        </div>
                        `
                        console.log(daticos["results"][i]["name"]);
                    }
                };
            }
            catch (err) {
                console.log(err.message); //Si algo malo pasa, imprima el error
            }
        }
    };
    xhr.send();
};