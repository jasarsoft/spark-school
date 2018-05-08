var br1 = parseInt(prompt("Unesi prvi broj"));
var br2 = parseInt(prompt("Unesi drug broj"));

var min, max;

if(br1 > br2){
	max = br1;
  min = br2;
}else{
	max = br2;
  min = br1;
}

for(var i = min; i < max; i++){
	if(i % 2 === 0 && i % 3 === 0){
  	console.log(i);
  }
}