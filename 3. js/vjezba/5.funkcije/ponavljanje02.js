function pow(b, n){
	if(n == 0)
  	return 1;
  
  return b * pow(b, n-1);
}

console.log(pow(3, 3));