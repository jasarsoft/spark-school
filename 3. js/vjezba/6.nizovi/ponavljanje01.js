function reverse(s){
	var str = "";
	for(var i = s.length - 1; i >= 0; i--){
  	str += s[i];
  }
  
  return str;
}

console.log(reverse("danas"));