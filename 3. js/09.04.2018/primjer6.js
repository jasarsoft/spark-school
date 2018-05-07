var mjesec = prompt("Unesite mjesec rijecima");

switch(mjesec.toLowerCase()){
	case 'decembar':
	case 'januar':
  case 'februar':
  	console.log("zima");
    break;
 	case 'mart':
 	case 'april':
 	case 'maj':
 		console.log("proljece");
    break;
 	case 'juni':
  case 'juli':
  case 'avgust':
  	console.log("ljeto");
    break;
  case 'septembar':
  case 'oktombar':
  case 'novembar':
 		console.log("jesen");
    break;
 default:
 		console.log("Pogresan unos!");
}