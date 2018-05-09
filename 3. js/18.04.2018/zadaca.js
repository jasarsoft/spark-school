var matrica = [ 
	[2, 4, 6],
 	[],
  []
];

for(var i = 0; i < 2; i++){
	for(var j = 0; j < 3; j++){
  	matrica[i + 1][j] = matrica[i][j] * matrica[i][j];
  }
}

console.log(matrica);