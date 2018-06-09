var desert = {
	naziv: "ledena kocka",
  vrsta : "kolac",
  broj_komada : 3,
  tezina : 150, 
};

desert.pojedi = function(){
	this.broj_komada--;
}
desert.preracunaj = function(komad, tezina){
	var kg = parseInt((komad * tezina) / 1000);
 	var gg = parseInt((komad * tezina) % 1000);
  return kg + "kg i " + gg + "gr";
}

console.log('Tezina: ' + desert.preracunaj(desert.broj_komada, desert.tezina));
dessert.pojedi();
console.log('Tezina: ' + desert.preracunaj(desert.broj_komada, desert.tezina));