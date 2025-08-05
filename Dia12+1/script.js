// referencias 

// A-Bomb
// 74a3650f8bc21b0f89d48f09495e5975
// https://www.superheroapi.com/api.php/74a3650f8bc21b0f89d48f09495e5975/search/A-Bomb
// https://www.superheroapi.com/api.php/74a3650f8bc21b0f89d48f09495e5975/1/powerstats

function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    const idheroe = document.getElementById("nombreInput").value.trim();
    console.log(idheroe);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/74a3650f8bc21b0f89d48f09495e5975/search/${idheroe}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                console.log(daticos);
                
                    for (let i = 0; i < daticos.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
                        <h3>${daticos["results"][i]["name"]}</h3>
                        <p><strong>powerstats:</strong> <div id="resultadospowerstats"></div> 
                        <p><strong>biografía:</strong> <div id="resultadosbiografía"></div>   
                        </div>
                        `
                    }
                }catch (err) {
                console.log(err.message);
            }
        }   
    };
    xhr.send();
};
//"intelligence":"38","strength":"100","speed":"17","durability":"80","power":"24","combat":"64"