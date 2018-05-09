function countdown(x){
	if(x == 0)
  	return 0;
 	
  console.log(x);
  return countdown(x - 1);
}

countdown(10);