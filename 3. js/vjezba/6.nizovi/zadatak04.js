var prices = ["1.00 KM", "1.85 KM", "19.99 KM"];
var suma = 0;

for(var i = 0; i < prices.length; i++){
	var arr = prices[i].split(" ");
	suma += parseFloat(arr[0]);
}

console.log(suma);