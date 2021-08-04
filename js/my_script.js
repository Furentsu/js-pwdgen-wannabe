var nome = console.log(prompt("Qual è il tuo nome?"));

var cognome = console.log(prompt("Qual è il tuo cognome?"));

var colore = console.log(prompt("Qual è il tuo colore preferito?"));

var password = nome + cognome + colore;

document.getElementById("password").innerHTML = password;

