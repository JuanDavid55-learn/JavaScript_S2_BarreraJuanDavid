function crear() {
    const nombre = prompt("Ingresa el nombre:");//Crea por solo una vez un tipo y un valor
    const apellido = prompt("Ingresa el apellido:");
    const persona = {
        "nombre": nombre,
        "apellido": apellido
    }
    return persona;//Objeto
}

function guardar(persona, lista) {
    lista.push(persona);
    return lista
}
function mostrarCompleto(lista) {
    let stringFinal = "";
    for (i = 0; i < listica.length; i++) {
        stringFinal = stringFinal + ("\nPersona #" + (i + 1) + " :" + listica[i]["nombre"] + " " + listica[i]["apellido"]);
    };
    alert(stringFinal);
}


let listica = [];
console.log(typeof listica); //No es un dato primitivo, sino un objeto
//añadir un elemento a la lista
/* 
listica.push("Pepito");
listica.push("Andres");
*/
console.log(listica);

listica.push({ "nombre": "Pedro", "apellido": "Gomez" });
listica.push({ "nombre": "Alejandra", "apellido": "Gomez" });
listica.push({ "nombre": "Rene", "apellido": "Villazón" });
//alert(listica);
//Buscar item en posición 3



let stringFinal = "";
let personaNueva = crear();
listica= guardar(personaNueva,listica);
mostrarCompleto(listica);
