var br1 = parseInt(prompt("Unesite prvi broj:"));
var br2 = parseInt(prompt("Unesite drugi broj:"));
var op = prompt("Unesite operator(+, -, *, /):");
var rez = 0;

if(op === '+'){
	rez = br1 + br1;
}else if(op === '-'){
	rez = br1 - br2;
}else if(op === '*'){
	rez = br1 * br2;
}else if(op === '/'){
	if(br2 === 0){
  	console.log("Djeljenje s nulom nije definisano!");
  }else{
  	rez = br1 / br2;
  }
}else{
	console.log("Pogresan operator!");
}

console.log("Rezultat: " + rez);