function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
    const peopleID = document.getElementById("nombreInput").value.trim();
    console.log(peopleID);
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/people/`;
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
                    let division = document.getElementById("resultados");
                    division.innerHTML += `
                    <div class="card">
                    <h1>${daticos["results"][peopleID - 1]["name"]}</h1>
                    <div class="datosPersonaje">
                       <div class="text1"><p><strong>height: </strong></p></div>      <p>${daticos["results"][peopleID - 1]["height"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>mass: </strong></p></div>      <p>${daticos["results"][peopleID - 1]["mass"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>hair_color: </strong></p></div>     <p>${daticos["results"][peopleID - 1]["hair_color"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>skin_color: </strong></p></div>       <p>${daticos["results"][peopleID - 1]["skin_color"]}</p>
                    </div>   
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>eye_color: </strong></p></div>      <p>${daticos["results"][peopleID - 1]["eye_color"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>birth_year: </strong></p></div>      <p>${daticos["results"][peopleID - 1]["birth_year"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>gender: </strong></p></div>      <p>${daticos["results"][peopleID - 1]["gender"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>homeworld: </strong></p></div>     <p>${daticos["results"][peopleID - 1]["homeworld"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>films: </strong></p></div>        <p>${daticos["results"][peopleID - 1]["films"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>species: </strong></p></div>    <p>${daticos["results"][peopleID - 1]["species"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>vehicles: </strong></p></div>    <p>${daticos["results"][peopleID - 1]["vehicles"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>starships: </strong></p></div>    <p>${daticos["results"][peopleID - 1]["starships"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>created: </strong></p></div>    <p>${daticos["results"][peopleID - 1]["created"]}</p>
                    </div>
                    <div class="datosPersonaje">
                        <div class="text1"><p><strong>edited: </strong></p></div>     <p>${daticos["results"][peopleID - 1]["edited"]}</p>
                    </div>                  
                    </div>
                    `
                    console.log(daticos["results"][peopleID - 1]["name"]);
                }

            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
};