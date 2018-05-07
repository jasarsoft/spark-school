var menu = prompt("Odaberite C za celzijus, F za fahrenheit-ma");

var temp;

if(menu.toLowerCase() === 'c'){
	temp = 30;
  console.log("Vrijednost temperature u Celzijusima je: " + temp);
}else{
	temp = 30* (9/5) + 32;
  console.log("Vrijednost temperature u Fahrenheit-ima je: " + temp);
}