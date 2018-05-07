var br1 = parseInt(prompt("Unesite prvi broj:"));
var br2 = parseInt(prompt("Unesite drugi broj:"));
var op = prompt("Unesite operator(+, -, *, /):");
var rez;

switch(op){
	case '+':
  	rez = br1 + br2;
    break;
  case '-':
  	rez = br1 - br2;
    break;
  case '*':
  	rez = br1 * br2;
    break;
  case '/':
  	if(br2 === 0){
    	console.log("Djeljenje s nulom nije definisano.");
      rez = Infinity;
    }else{
    	rez = br1 / br2;
    }
    break;
  default:
  	console.log("Pogresan operator!");
    rez = 'error';
}

console.log("Rezultat: " + rez);