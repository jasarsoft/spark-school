function pow(a, x){
	if(x == 1)
  	return a;
    
	return a * pow(a, x - 1);
}

var a = parseInt(prompt("Unesite broj"));
var x = parseInt(prompt("Unesite potenciju"));

console.log(pow(a, x));