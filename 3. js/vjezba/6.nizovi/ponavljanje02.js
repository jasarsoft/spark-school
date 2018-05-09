var len = 0;
var input = prompt("Unesite recenicu");

input = input.split(" ");
for(var i = 0; i < input.length; i++){
	if(input[i].length > len){
  	len = input[i].length;
  }
}

console.log(len);