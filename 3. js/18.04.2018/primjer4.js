var niz = [];

do {
  var br = parseInt(prompt("Unesite dvocifren broj:"));
  if (br > 9 && br < 100 && niz.indexOf(br) == -1) {
    niz.push(br);
  }
} while (niz.length < 5);

console.log(niz);