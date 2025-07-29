let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://rickandmortyapi.com/api/character', true);
function onRequestHandler(){
    if  (this.status == 200){
        const data = JSON.parse(this.response);
        console.log(data);
    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.send();

// solo es una prueba
/* 
opc=prompt(`
    =======================================
    MENU PRINCIPAL
    =======================================
    1. ver lista de personajes
    2. ver personaje (llamar por nombre)
    =======================================
    que desea hacer? (1-2)`);
    if(opc==1){
        alert(JSON.stringify(data));
    }
    else if (opc==2){
        let personaje = prompt(`cual es el nombre del personaje?`);    
        let ver = data.find(personajito => personajito.name === personaje);     
        if (verCat) {     
            alert(JSON.stringify(ver));    
        } 
        else {      
            alert("personaje no encontrado, asegurese de que este correcto.");      
        }
    }
    else{
        alert("no valido");
    }*/