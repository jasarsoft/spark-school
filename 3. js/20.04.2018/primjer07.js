var vozilo = {
	brojPutnika : 2,
  maxBrojPutnika : 10
};

function add(obj, putnik){
	if(obj.maxBrojPutnika <= (obj.brojPutnika + putnik)){
  	obj.brojPutnika += putnik;
    console.log("Trenutni broj putnika " + obj.brojPutnika);
  }else{
  	console.log("Greska, dostignut je max broj putnika.");
  }
}

var input = parseInt(prompt("Unesite broj putnika"));
add(vozilo, input);