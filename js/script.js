// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).


// Passi logici:

// Chiedo all'utente con quale livello di difficoltà vuole giocare (facile, medio, difficile)
// Salvo la risposta dell'utente
// A seconda del livello scelto, creo un numero di celle corrispondente
    // Confronto il livello scelto dall'utente con i tre livelli di difficoltà
    // creo un ciclo per:
        // generare il numero di celle corrispondenti al livello di difficoltà
        // agganciare a ogni cella l'evento "click"
            // cambio lo sfondo della cella cliccata
            // mostro il numero della cella cliccata


// variabili globali
let difficoltaUtente;

// Chiedo all'utente con quale livello di difficoltà vuole giocare (facile, medio, difficile)
// Salvo la risposta dell'utente
difficoltaUtente = prompt("Scegli un livello di difficoltà (facile, medio, difficile)");

// A seconda del livello scelto, creo un numero di celle corrispondente
// Confronto il livello scelto dall'utente con i tre livelli di difficoltà
if (difficoltaUtente === "facile") {

    generaCampoMinato(100, "facile");

} else if (difficoltaUtente === "medio") {

    generaCampoMinato(81, "medio");

} else if (difficoltaUtente === "difficile") {

    generaCampoMinato(49, "difficile");

}

// Siccome devo ripetere le stesse istruzioni, creo una funzione per generare il campo minato
function generaCampoMinato(numCelle, livelloGioco) {

    // creo un ciclo per:
    for (let i = 1; i <= numCelle; i++) {

        console.log("numero cella:", i);

        // generare il numero di celle corrispondenti al livello di difficoltà
        let nuovaCella = document.createElement("div");
        nuovaCella.className = "cella " + livelloGioco;
        document.getElementById("contenitore-celle").append(nuovaCella);
        
        // agganciare a ogni cella l'evento "click"
        // cambio lo sfondo della cella cliccata
        // mostro il numero della cella cliccata
    }
}