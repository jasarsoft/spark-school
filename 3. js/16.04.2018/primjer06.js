var arr = ["nesto", "neki", "drzava", "javascript", "low"];
var min, max;

function min_max(arr/*, min, max*/){
	min = arr[0].length;
  max = arr[0].length;
	for(var i = 0; i < arr.length; i++){
  	if(min > arr[i].length){
    	min = arr[i].length;
    }
    if(max < arr[i].length){
    	max = arr[i].length;
    }
  }
}
min_max(arr);
console.log("Min: " + min);
console.log("Max: " + max);