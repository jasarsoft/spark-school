var godina = parseInt(prompt("Unesite godinu rodjenja"));

if(godina > 1900 && godina < 2018){
	var age = 2018 - godina;
  
  if(age < 18)
  	console.log("Niste punoljeti!");
  else
  	console.log("Punoljetni ste!");
} else {
	console.log("Pogresna unos!");
}