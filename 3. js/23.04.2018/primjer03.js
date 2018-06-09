var test = {
	ostvareniBodovi : 76,
  maxBodovi : 100,
  ocjena : 0,
  proracun : function(){
  	this.ocjena = Math.round((this.ostvareniBodovi/this.maxBodovi) * 5);
  }
};

console.log("Ocjena prije: " + test.ocjena);
test.proracun();
console.log("Ocjena poslije: " + test.ocjena);