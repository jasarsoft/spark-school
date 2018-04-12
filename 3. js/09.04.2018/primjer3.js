var a = parseInt(prompt("Unesite prvi troznamenkasti broj:")),
		b = parseInt(prompt("Unesite drugi troznamenkasti broj:")),
		c = 0;

if(a >= 100 && a <= 1000)
	c += a % 10;
else if(b >= 100 && b <= 1000)
	c += b % 10;
  
console.log(c); //by elegant