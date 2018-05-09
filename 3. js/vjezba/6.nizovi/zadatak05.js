function compareArr(arr1, arr2){
	var newArr = [];
  
  newArr = arr1.filter(function(val){
  	return arr2.indexOf(val) === -1;
  }).concat(arr2.filter(function(val){
  	return arr1.indexOf(val) === -1;
  }));
  
  return newArr;
}

var result = compareArr([1, 'a', 2, 'b'], [2, 'a', 3, 4]); 
console.log(result);