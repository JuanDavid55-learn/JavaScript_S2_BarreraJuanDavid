function buscarPersonaje(){
    const xhr = new XMLHttpRequest();
    const URL = `https://pokeapi.co/api/v2/pokemon/`;

    console.log(URL)
    xhr.open("GET",URL,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status===200){
            try {
                const daticos =JSON.parse(xhr.response);
                console.log(daticos);
            }
            catch{
                console.log(err.message);
            }
        }        
    };
    xhr.send();
}
buscarPersonaje();