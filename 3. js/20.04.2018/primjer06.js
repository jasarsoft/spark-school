var knjiga = {
	autor : "Autor",
  ime : "Ime",
  godina : 2018
};

for(var key in knjiga){
	if(typeof(knjiga[key] !== 'function'))
		console.log(key + " : " + knjiga[key]);
}