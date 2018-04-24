var niz = [];

for(var i = 0; i < 10; i++){
	niz[i] = parseInt(prompt("Unesite broj:"));
}

niz.splice(7,3, 25);
console.log(niz);