var suma = 0;
var prices = ['KM 1.00', 'KM 1.85', 'KM 19.99'];

for(var i = 0; i < prices.length; i++)
	suma += parseFloat(prices[i].slice(3));
  
console.log(suma);