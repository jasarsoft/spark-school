function pow(x, n){
	var value = 1;
	
  for(var i = 1; i<=n; i++) value *= x;
    
	return value;
}

function pow2(x, n){
	if(n === 0) return 1;
	
  return x * pow2(x, n-1);
}

console.log(pow(2, 3));