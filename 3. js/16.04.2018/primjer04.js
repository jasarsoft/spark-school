var arr = [];
var suma = 0;

while(suma <= 150){
	var num = parseInt(prompt("Unesite broj")); 
	arr.push(num);
  suma += num;
}

arr.sort(function(a, b){
	return b - a;
});

console.log(arr);