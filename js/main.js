
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

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

                    console.log([punteggio.length]);

                    if (myArrNum.includes(i)) {
                        nuovoElemento.classList.add("red");
                        alert("Hai perso!");
                    } else {
                        nuovoElemento.classList.add("green");
                        // creare opzione che termina partita con punteggio pieno 84 click
                    }  
                    
                    
                    // nuovoElemento.classList.add("clicked");
                    console.log(i);
                }
            );
            
            myContainer.appendChild(nuovoElemento);
        }

        const myArrNum = genArrNumUniciRandomMinMax(16, 1, 100);
        console.log(myArrNum);
    }

);




// FUNCTION

function createBox(tipoElemento, classe){

    const mioElement = document.createElement(tipoElemento);
    mioElement.classList.add(classe);
    

    return mioElement;
}

function randomInteger(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}


function genArrNumUniciRandomMinMax(howMany, minNum, maxNum) {
    
    const newArr = [];

    while (newArr.length < howMany){
        let newNumber = randomInteger(minNum, maxNum);
        
        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }

    return newArr;
}


function punteggio (){
    
    const listaPunteggio = [];
    
    let i = 0;
    while (listaPunteggio.length < i ){
        listaPunteggio.push(document.getElementsByClassName("green"));
        console.log("punteggio" + listaPunteggio.length);
    }
    return listaPunteggio;
}




// inserire all'interno del event click, condizione if (numero includes lista bombe, color red e termnia partita) else(color azzurro e continua)

// termine partita --> condizione if sopra, oppure seleziona tutte le caselle tranne le bombe
// alert per dire quanti punti ha fatto l'utente (come comando nell'if se becca la bomba e se le azzecca tutte)
// l'alert ha valore di quante celle ha selezionato -1 (l'ultima della bomba)

// come registro wuante caselle sono state selezionate??