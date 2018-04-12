var a = parseInt(prompt("Unesite prvi broj:")),
		b = parseInt(prompt("Unesite drugi broj:")),
		c;

//ako su oba parna podjeli veci sa manjem
if(a % 2 == 0 && b % 2 == 0) 
	c = (a > b) ? a/b : b/a ;

//ako su oba neparna, od veceg broja oduzeti manji
else if(a % 2 != 0 && b % 2 != 0) 
	c = (a > b) ? a - b : b - a;

//ako jedan paran drugi neparan onda ih pomnozi
else //if(a % 2 == 0 && b % 2 != 0 || a % 2 != 0 && b % 2 == 0) 
	c = a * b;
  
console.log(c);