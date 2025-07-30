function buscarPersonaje(){
    const idUsar =prompt("ingresa el id del personaje que deseas buscar:");
    const xhr = new XMLHttpRequest();
    const URL = `https://swapi.py4e.com/api/people/`;
    console.log(URL)
    xhr.open("GET",URL,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===3){
            alert("cargando...")
        }
        else if(xhr.readyState===4 && xhr.status===200){
            try {
                const daticos =JSON.parse(xhr.response);
                console.log(daticos);
                alert("Name: "+daticos["results"][idUsar]["name"]+"\nheigt: "+daticos["results"][idUsar]["height"]+"\nmass: "+daticos["results"][idUsar]["mass"]+"\nhair_color: "+daticos["results"][idUsar]["hair_color"]+"\nskin_color: "+daticos["results"][idUsar]["skin_color"]+"\neye_color: "+daticos["results"][idUsar]["eye_color"]+"\nbirth_year: "+daticos["results"][idUsar]["birth_year"]+"\ngender: "+daticos["results"][idUsar]["gender"]);// todavia en procesooo
            }
            catch{
                console.log(err.message);
            }
        }        
    };
    xhr.send();
}
buscarPersonaje();