var br1 = parseInt(prompt("Unesite prvi broj:"));
var br2 = parseInt(prompt("Unesite drugi broj:"));

if(br1 % 2 === 0 && br2 % 2 === 0){
	console.log("Oba broja su parna!");
}else if(br1 % 2 !== 0 && br2 % 2 !== 0){
	console.log("Oba broja su neparna!");
}else{
	console.log("Jedan broj je paran a jedan neparan!");
}