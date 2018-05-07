var br1 = parseInt(prompt("Unesite trocifren broj:"));
var br2 = parseInt(prompt("Unesite trocifren broj:"));
var suma = 0;

if(br1 >= 100 && br1 < 1000){
	suma += br1;
}
if(br2 >= 100 & br2 < 1000){
	suma += br2;
}

console.log("Suma je: " + suma);