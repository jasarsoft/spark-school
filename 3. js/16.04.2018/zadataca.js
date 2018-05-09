var arr = [];

for(var i = 0; i < 10; i++){
	arr.push(parseInt(prompt("Unesite broj")));
}

var min = arr[0];
var max = arr[0];
for(var i = 0; i < arr.length; i++){
	if(min > arr[i]){
  	min = arr[i];
  }
  if(max < arr[i]){
  	max = arr[i];
  }
}
console.log("Najveci element: " + max);
console.log("Najmanji element: " + min);

arr.sort(function(a, b){
	return a - b;
});
console.log(arr);

arr.sort(function(a, b){
	return b - a;
});
console.log(arr);