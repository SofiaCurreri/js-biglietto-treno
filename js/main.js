//CHIEDO ALL' UTENTE QUANTI KM VUOLE PERCORRERE
const percorso = parseInt(prompt("Quanti chilometri intendi percorrere?"));

//CHIEDO ALL' UTENTE L' ETA' DEL PASSEGGERO
const eta = parseInt(prompt("Quanti anni ha il passeggero?"));

//CALCOLO PREZZO VIAGGIO CONSIDERANDO CHE:
// - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - Va applicato uno sconto del 20% per i minorenni
// - Va applicato uno sconto del 40% per gli over 65
// - L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo

const prezzo = 0.21 * percorso;
let new_prezzo;
if (eta < 18) {
    new_prezzo = prezzo - (0.2 * prezzo);
} else if (eta > 65) {
    new_prezzo = prezzo - (0.4 * prezzo);
} else {
    new_prezzo = prezzo;
}

document.getElementById("prezzo_finale").innerHTML = "Il prezzo del biglietto è " + new_prezzo.toFixed(2) + " €";