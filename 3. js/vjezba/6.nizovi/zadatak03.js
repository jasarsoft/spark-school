var input = prompt("Unesite string");
var samoglasnici = ['a', 'e', 'i', 'o', 'u'];
var count = 0;

for(var i = 0; i < input.length; i++){
	if(samoglasnici.indexOf(input[i]) > -1)
  	count++;
}

console.log(count);