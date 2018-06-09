var time = {
	seconds : 0,
  convertToMin : function(){
  	var min = 0;
    while(time.seconds >= 60){
      time.seconds -= 60;
      min++;
    }
    time.minutes = min;
  }
}

time.seconds = 125;
time.convertToMin();
console.log(time.minutes + "m " + time.seconds + "s");