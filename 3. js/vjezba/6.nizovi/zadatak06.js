function unite(arr){
	var newarr = [];
  var union = [];
  
  for(var i = 0; i < arguments.length; i++){
  	newarr = newarr.concat(arguments[i]);
  }
  
  newarr.map(function(num){
  	if(union.indexOf(num) === -1)
    	union.push(num);
  })
  
  return union;
}

console.log(unite([1, 2, 3], [3, 4, 5]));