var cout = 1,
		suma = 0;

do{
	var input = parseInt(prompt("Unesite trocifren broj:"));
  if(input >= 100 && input <= 999){
  	suma += parseInt(input / 100);
  }
}while(cout++ < 3);

console.log(suma);