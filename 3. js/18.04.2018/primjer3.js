var suma = 0;
var prices = ['KM 1.00', 'KM 1.85', 'KM 19.99'];

for(var i = 0; i < prices.length; i++){
	var niz = prices[i].split(' ');
  suma += parseFloat(niz[1]);
}
	
  
console.log(suma);