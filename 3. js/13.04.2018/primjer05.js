function countdown(x){
	if(x == 0)
  	console.log(x);
  else{
  	console.log(x);
		countdown(x - 1);
  }
}

countdown(10);