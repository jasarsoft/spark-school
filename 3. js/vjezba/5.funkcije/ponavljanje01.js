function suma(x){
	if(x == 1)
  	return 1;
    
	var prost = true;
  for(var i = 2; i < x/2 + 1; i++){
  	if(x % i == 0){
    	prost = false;
      break;
    }
  }
  
  if(prost){
  	return x + suma(x - 1);
  }else{
  	return suma(x - 1);
  }
}

console.log(suma(10));