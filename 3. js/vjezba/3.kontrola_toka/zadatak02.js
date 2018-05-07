var num1 = parseInt(prompt("Unesite prvi broj:"));
var num2 = parseInt(prompt("Unesite drugi broj:"));

if(num1 % 2 === 0 && num2 % 2 === 0){
	console.log(num1 > num2 ? num1/num2 : num2/num1);
}else if(num1 % 2 != 0 && num2 % 2 != 0){
	console.log(num1 > num2 ? num1 - num2 : num2 - num1);
}