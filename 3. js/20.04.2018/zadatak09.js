var movies = [
    {
        name: 'The Godfather',
        duration: 175,
        rating: 9.2,
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano']
    },
    {
        name: 'The Shawshank Redemption',
        duration: 142,
        rating: 9.3,
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
    }
];
for (var i = 0; i < movies.length; i++) {
	console.log(movies[i].name);
}
var highRate = movies[0];

for(var i = 0; i < movies.length; i++){
	if(highRate.rating < movies[i].rating){
  	highRate = movies[i];
  }
}

console.log("Najvise ocjena kod " + highRate.name);