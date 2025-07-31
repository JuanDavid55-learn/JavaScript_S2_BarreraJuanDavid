function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
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
        else if (xhr.readyState === 4 && xhr.status === 200){
            try {
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    let division = document.getElementById("resultados");
                    division.innerHTML += `
                    <div class="card">
                    <h1>${daticos["results"][peopleID-1]["name"]}</h3>
                    <p><strong>height: </strong>${daticos["results"][peopleID-1]["height"]}</p>
                    <p><strong>mass: </strong>${daticos["results"][peopleID-1]["mass"]}</p>
                    <p><strong>hair_color: </strong>${daticos["results"][peopleID-1]["hair_color"]}</p>
                    <p><strong>skin_color: </strong>${daticos["results"][peopleID-1]["skin_color"]}</p>
                    <p><strong>eye_color: </strong>${daticos["results"][peopleID-1]["eye_color"]}</p>
                    <p><strong>birth_year: </strong>${daticos["results"][peopleID-1]["birth_year"]}</p>
                    <p><strong>gender: </strong>${daticos["results"][peopleID-1]["gender"]}</p>
                    <p><strong>homeworld: </strong>${daticos["results"][peopleID-1]["homeworld"]}</p>
                    <p><strong>films: </strong>${daticos["results"][peopleID-1]["films"]}</p>
                    <p><strong>species: </strong>${daticos["results"][peopleID-1]["species"]}</p>
                    <p><strong>vehicles: </strong>${daticos["results"][peopleID-1]["vehicles"]}</p>
                    <p><strong>starships: </strong>${daticos["results"][peopleID-1]["starships"]}</p>
                    <p><strong>created: </strong>${daticos["results"][peopleID-1]["created"]}</p>
                    <p><strong>edited: </strong>${daticos["results"][peopleID-1]["edited"]}</p>
                    </div>
                    `
                    console.log(daticos["results"][peopleID]["name"]);
                }
                
            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
};