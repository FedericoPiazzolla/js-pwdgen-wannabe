// Raccolta dei dati
const firstname = prompt("Inserisci il tuo nome");
console.log(firstname);
const lastname = prompt("Inserisci il tuo cognome");
console.log(lastname)
const favcolors = prompt("Inserisci il tuo colore preferito");
console.log(favcolors);

// Logica del programma
const password = `Ti consiglio come password sicura: ${firstname}${lastname}${favcolors}21`;
console.log(password);

// Output
document.getElementById("result").innerHTML = password;