var arr = [];

for(var i = 0; i < 8; i++){
	var num = parseInt(prompt("Unesite broj"));
  arr.push(num);
}

console.log("Cetvrti broj: " + arr[3]);
console.log("Zborj prvog i petog: " + (arr[0] + arr[4]));