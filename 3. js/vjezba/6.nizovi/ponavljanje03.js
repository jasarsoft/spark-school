function titleCase(str){
	str = str.split(" ").map(function(word){
  	word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  
  return str;
}

console.log(titleCase('Danas je lijep dan za programiranje.')); 