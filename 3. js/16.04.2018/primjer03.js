var arr = [];

for(var i = 0; i < 50; i++){
	arr.push(i+1);
}

var sum = 0;
for(var i = 0; i < 50; i++){
	sum += arr[i];
}

console.log("Prosjecna vrijednost: " + (sum/arr.length));