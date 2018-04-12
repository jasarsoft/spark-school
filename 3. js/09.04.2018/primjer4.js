var a = parseInt(prompt("Unesite prvi broj:")),
		b = parseInt(prompt("Unesite drugi broj:")),
    opr = promt("Unesite operaciju (+,-,*,/):"); //,
		//c = 0;

switch(opr){
	case '+':
  	console.log(a + b); //c = a + b;
    break;
  case '-':
  	console.log(a - b);//c = a - b;
    break;
  case '*':
  	console.log(a * b);//c = a * b;
    break;
 	case '/':
  	console.log(b != 0 ? a / b : "Djeljenje s nulom nije definisano!");
		break;
  default:
  	console.log("Pogresan operator!");
}
