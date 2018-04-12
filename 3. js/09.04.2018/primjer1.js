var god = 2018 - parseInt(prompt("Unesite godinu roðenja"));

if(god <= 0)
	console.log("Pogresan unos!");
else if(god < 18)
	console.log("Niste punoljetni!");
else
	console.log("Punoljetni ste!");