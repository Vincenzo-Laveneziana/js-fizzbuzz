/**
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 * per i multipli di 3 stampi “Fizz” al posto del numero
 * per i multipli di 5 stampi Buzz.
 * per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 * 
*/ 

var creaNumeri =0;
var list = document.getElementById("list");
var elementi ="";
var n = 0;


for( var i = 0; i < 100 ; i++){
  n++;
  creaNumeri = i+ 1;

  if ((creaNumeri % 3 == 0) && (creaNumeri % 5 != 0)){

    creaNumeri = "LALALALALALA----------" + "(Fizz)" + n;
    console.log("Fizz      "+ n);

  } else if ((creaNumeri % 5 == 0) && (creaNumeri % 3 != 0)){
   
    creaNumeri = "POPOPOPOPO--------------" + "(Buzz)" + n;
    console.log("Buzz      " + n );

    //i multipli di 5
  } else if ((creaNumeri % 3 == 0) && (creaNumeri % 5 == 0)){

    creaNumeri = "EEEEMMMMBBBB--" + "(FizzBuzz)" + n;
    console.log("FizzBuzz  " + n);
    // i numeri che sono sia multipli di 3 che di 5
  } else {
    creaNumeri = "BOBOBOBOBO------" + "(Rimanenti)" + n;
    console.log("Rimanenti " + n);
    //i rimanenti
  }

  elementi += "<li>" + creaNumeri + "</li>";
  
}//fine ciclo for
list.innerHTML= elementi;


bottoneSottotitoli.addEventListener( "click", function(){
  containerLi.className = "show";
  bottoneSottotitoli.className = "hidden";
  bottoneSottotitoli2.className = "show";
 }
);//fine bootne sottotitoli


bottoneSottotitoli2.addEventListener( "click", function(){
  bottoneSottotitoli2.className = "hidden";
  bottoneSottotitoli.className = "show";
  containerLi.className = "hidden";
 }
);
