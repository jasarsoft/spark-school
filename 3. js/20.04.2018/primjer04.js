var auto = {};

for(var i = 0; i < 5; i++){
	var name = "vlasnik" + (i + 1);
	auto[name] = "Vlasnik " + (i + 1);
}

for(var key in auto){
  console.log(key + ' : ' + auto[key]);
}