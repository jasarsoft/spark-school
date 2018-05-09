var arr = [];
var suma = 0;

do{
	var num = parseInt(prompt("Unesite broj:"));
	arr.push(num);
	suma += num;
}while(suma <= 150);

arr.sort(function(a, b){
	return b - a;
});

console.log(arr);