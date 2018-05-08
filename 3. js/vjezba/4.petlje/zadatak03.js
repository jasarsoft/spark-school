var broj = 0, count = 0;
var rez = 1;

while(count < 10 && broj < 5){
	var input = parseInt(prompt("Unesite broj"));
  if(input > 0){
  	rez *= input;
    broj++;
  }
  
  count++;
}

if(broj === 5){
	console.log("Rezultat: " + rez);
}else{
	console.log("Broj unosa presao 10 pousaja.");
}