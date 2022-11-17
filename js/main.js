// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const myContainer = document.getElementById("container");

const generaTabella = document.getElementById("play");

generaTabella.addEventListener("click",

    function (){

        myContainer.innerHTML = "";
        console.clear();

        for (let i = 1; i <= 100; i++){

            let nuovoElemento = createBox ("div", "box");
            nuovoElemento.append(i);
            
            nuovoElemento.addEventListener("click",
            
                function (){
                    nuovoElemento.classList.add("clicked");
                    console.log(i);
                }
            );
            
            myContainer.appendChild(nuovoElemento);
        }
    }
);




// FUNCTION

function createBox(tipoElemento, classe){

    const mioElement = document.createElement(tipoElemento);
    mioElement.classList.add(classe);
    

    return mioElement;
}