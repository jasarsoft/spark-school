var arr = [];
var max = parseInt(prompt("Unesite duzinu niza: "));

for(var i = 0; i < max; i++){
	arr.push(parseInt(prompt("Unesite broj")));
}

console.log("Prvi: " + arr[0]);
console.log("Srednji: " + (arr[parseInt(max/2)]));
console.log("Zadnji: " + arr[max - 1]);