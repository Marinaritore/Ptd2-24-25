let LlistaJugadors = [];


function AfegirJugador() {

    //afegir jugador a la lista
    let jugador = document.getElementById("camp_nom").value;
    document.getElementById("jugadors").innerHTML += `${jugador}<br>`;

    LlistaJugadors.push(jugador);

}

function NextPlayer() {
    //Mostrar per pantalla el jugador actual
    document.getElementById("jugador_actual").innerHTML = LlistaJugadors[0];
    // EXTREURE EL JUGADIR QUE ESTAVA EN EL COMENÇAMENT

    let jugador_actual = LlistaJugadors.shift();
    // COLOCAR-LO AL FINAL DE LA LLISTA

    LlistaJugadors.push();
    // borrar el cuadro de jugador

    document.getElementById("jugadors").innerHTML = " ";

    // recorrer el vector i el mostrem per pantalla
    //element per element
    for (let i = 0; i < LlistaJugadors.length; i++) {
        document.getElementById("jugadors").innerHTML += `${LlistaJugadors[i]} <br>`;
    }

}