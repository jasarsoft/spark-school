var movie = {
    name: 'The Godfather',
    duration: 175,
    rating: 9.2,
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano']
};

for(var key in movie){
	if(typeof(movie[key]) !== 'function'){
  	console.log(key + " : " + movie[key]);
  }
}
for(var i = 0; i < movie.actors.length; i++){
	var lastname = movie.actors[i].split(" ");
  if(lastname[1].toLowerCase().slice(0, 1) === 'c'){
  	console.log(movie.actors[i]);
  }
}