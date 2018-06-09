var auto = {
	stanje: "parkirano",
  vozi : function(){
  	auto.stanje = "vozi";
    return auto.stanje;
  },
  stani : function(){
  	auto.stanje = "stoji";
    return auto.stanje;
  }
};

console.log(auto.stanje);
console.log(auto.vozi());
console.log(auto.stani());