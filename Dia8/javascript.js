function buscarPersonaje(){
    const nombreUsar =prompt("ingresa el nombre del personaje que deseas buscar:");
    const xhr = new XMLHttpRequest();
    const URL = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`; // acento inverso son esas comillas
    console.log(URL)
    xhr.open("GET", URL,true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState===3){

            alert("cargando...")
        }
        else if(xhr.readyState===4 && xhr.status===200){
            try {
                const daticos =JSON.parse(xhr.responseText)
                alert("The character is: Name:"+daticos["results"][0]["name"]+" Status:"+daticos["results"][0]["status"]+ " Specie:"+daticos["results"][0]["species"]) // cambiar el 0
            }
            catch{
                console.log(err.message);// si sale mal, imprima el mensaje
            }
        }
    };
    xhr.send();
}
buscarPersonaje();