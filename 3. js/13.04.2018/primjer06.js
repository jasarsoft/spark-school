function fakt(x){
	if(x === 1)
  	return 1;
  else
  	return x * fakt(x - 1);
}

console.log(fakt(5));