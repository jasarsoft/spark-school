var toplist = {
  songs: [{
    title: 'Numb',
    band: 'Linkin Park',
    year: 2003,
    length: '3:08',
    listed: '11th'
  }, {
    title: 'Boulevard Of Broken Dreams',
    band: 'Green Day',
    year: 2004,
    length: '4:20',
    listed: '2nd'
  }, {
    title: 'Bring me to life',
    band: 'Evanescence',
    year: 2003,
    length: '3:57',
    listed: '5th'
  }]
};

toplist.getLengthInSeconds = function(duzina){
	var arr = duzina.split(":");
  var min = parseInt(arr[0]);
  var sec = parseInt(arr[1]);
  return (min * 60) + sec;
} 

toplist.getLongestSong = function(){
	var longest = this.songs[0];
	for(var i = 0; i < this.songs.length; i++){
  	if(this.getLengthInSeconds(longest.length) < this.getLengthInSeconds(this.songs[i].length)){
    	longest = this.songs[i];
    }
  }
  
  return longest;
}

console.log('Najduza pjesma: ' + toplist.getLongestSong().title);