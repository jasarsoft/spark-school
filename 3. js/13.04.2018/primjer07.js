function isEven(x){
	if(x > 0) 
  	return isEven(x - 2);
	else if (x == 0)    
  	return true;
  else
  	return false;
}

console.log(isEven(10));