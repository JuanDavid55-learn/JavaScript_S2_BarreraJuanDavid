function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
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
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">        
                        <div class="personaje">
                        <img src="${daticos["results"][i]["image"]["url"]}" alt="">
                        <h3>${daticos["results"][i]["name"]}</h3>
                        </div>
                        <div class="respowerstats">        
                        <p><strong>powerstats:</strong></p> <div class="resultadospowerstats"></div>        
                        </div>        
                        <div class="resbiografía">        
                        <p><strong>biografía:</strong></p> <div class="resultadosbiografía"></div>        
                        </div>                           
                        </div>
                        `
                        let divisionpower = document.getElementsByClassName("resultadospowerstats");
                        divisionpower[i].innerHTML += `
                        <div>
                        <p><strong>intelligence:</strong>${daticos["results"][i]["powerstats"]["intelligence"]}</p>
                        <p><strong>strength:</strong>${daticos["results"][i]["powerstats"]["strength"]}</p>
                        <p><strong>speed:</strong>${daticos["results"][i]["powerstats"]["speed"]}</p>
                        <p><strong>durability:</strong>${daticos["results"][i]["powerstats"]["durability"]}</p>
                        <p><strong>power:</strong>${daticos["results"][i]["powerstats"]["power"]}</p>
                        <p><strong>combat:</strong>${daticos["results"][i]["powerstats"]["combat"]}</p>
                        </div>
                        `
                        let divisionbiography = document.getElementsByClassName("resultadosbiografía");
                        divisionbiography[i].innerHTML += `
                        <div>
                        <p><strong>aliases:</strong>${daticos["results"][i]["biography"]["aliases"]}</p>
                        <p><strong>alignment:</strong>${daticos["results"][i]["biography"]["alignment"]}</p>
                        <p><strong>alter-egos:</strong>${daticos["results"][i]["biography"]["alter-egos"]}</p>
                        <p><strong>first-appearance:</strong>${daticos["results"][i]["biography"]["first-appearance"]}</p>
                        <p><strong>full-name:</strong>${daticos["results"][i]["biography"]["full-name"]}</p>
                        <p><strong>place-of-birth:</strong>${daticos["results"][i]["biography"]["place-of-birth"]}</p>
                        <p><strong>publisher:</strong>${daticos["results"][i]["biography"]["publisher"]}</p>
                        </div>
                        `
                    }
                }
            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
};