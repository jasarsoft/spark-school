var str = prompt("Unesite string");
var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o' , 'O', 'u', 'U'];
var vowelCount = 0;

for(var i = 0; i < str.length; i++){
	for(var j = 0; j < vowels.length; j++){
  	if(str[i] === vowels[j]){
    	vowelCount++;
    }
  }
}

console.log("Broj samoglasnika: " + vowelCount);

var newText = '';
var letterCount = 0;

for(var i = 0; i < str.length; i++){
	if(letterCount < 5 && (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z')){
  	letterCount++;
    newText += str[i];
  }
}

console.log("Prvi pet slova: " + newText);