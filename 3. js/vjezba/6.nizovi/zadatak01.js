var arr = [];
var suma = 0;

for(var i = 0; i < 50; i++){
	arr.push(i);
}

for(var i = 0; i < arr.length; i++){
	suma += arr[i];
}

console.log(suma/arr.length);