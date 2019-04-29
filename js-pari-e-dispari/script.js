var scelta = prompt("pari o dispari?");
var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5: '));

//verifico che il numero inserito sia corretto
if(numero_utente > 0 && numero_utente < 6){
  numero_valido = true;
}else {
  alert('Numero errato! Inserisci un altro numero compreso tra 1 e 5');
}

//verifico chi dei due vince
if (numero_valido){
  /*inserisco le variabili dentro l'if(numero_valido) in modo che se l'utente mette un numero errato,
  queste non vengono inizializzate in modo così da avere ottimizzazione su velocità e memoria usata*/
  var numero_cpu = Math.floor(((Math.random() * 5) + 1));
  var somma = numero_cpu + numero_utente;
  var pari = dispari = numero_valido = false;

  //attribuzione pari o dispari all'utente/cpu
  if(scelta == "pari"){
    pari = true;
  }else if(scelta == "dispari"){
    dispari = true;
  }

  console.log(somma,pari,dispari);

  if (pari == true && somma%2 == 0){
    alert("Hai vinto!");
  }else if(dispari == true && somma%2 != 0){
    alert("Hai vinto!");
  }else {
    alert("Hai perso!");
  }

}
