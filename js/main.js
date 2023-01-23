//CHIEDO ALL' UTENTE QUANTI KM VUOLE PERCORRERE
let percorso = prompt("Quanti chilometri intendi percorrere?");

//CHIEDO ALL' UTENTE L' ETA' DEL PASSEGGERO
let eta = parseInt(prompt("Quanti anni ha il passeggero?"));

//CALCOLO PREZZO VIAGGIO CONSIDERANDO CHE:
// - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - Va applicato uno sconto del 20% per i minorenni
// - Va applicato uno sconto del 40% per gli over 65
// - L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo

