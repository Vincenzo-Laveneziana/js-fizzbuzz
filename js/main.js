/**
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 * per i multipli di 3 stampi “Fizz” al posto del numero
 * per i multipli di 5 stampi Buzz.
 * per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 * 
*/ 

var creaNumeri =0;

console.log("Ecco a voi una delle più belle noti musicali")
for( var i = 0; i < 100 ; i++){
  creaNumeri++;
  if ((creaNumeri % 3 == 0) && (creaNumeri % 5 != 0)){

    console.log("Fizz     " + creaNumeri);
    //i multipli di 3
  } else if ((creaNumeri % 5 == 0) && (creaNumeri % 3 != 0)){

    console.log("Buzz     " + creaNumeri);
    //i multipli di 5
  } else if ((creaNumeri % 3 == 0) && (creaNumeri % 5 == 0)){

    console.log("FizzBuzz " + creaNumeri);
    // i numeri che sono sia multipli di 3 che di 5
  } else {

    console.log("Tuzciah  " + creaNumeri);
    //i rimanenti
  }

}//fine ciclo for
