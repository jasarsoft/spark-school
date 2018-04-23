function mjesec(m){
	switch(m){
  	case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
    	return 31;
		
    case 4:
    case 9:
    case 11:
    	return 30;
      
    case 2:
    	if(m % 4 == 0 || m % 100 == 0 && m % 400 == 0 || m % 400 != 0)
    		return 28;
      else
      	return 29;
    
    default:
    	return 0;
  }
}

console.log(mjesec(3));