var s = prompt('Inserisci una parola: ');
var s_reverse;
s_reverse = strReverse(s);
console.log(s , s_reverse)
if (s === s_reverse){
  alert("La stringa "+ s + " è palindroma");
}else {
  alert("La stringa "+ s + " non è palindroma");

}


function strReverse(s) {
  var string_splitted,array_reverse,string_reverse;
  //splitto la stringa in un array,dove ogni posizione corrisponde ad una lettera
  string_splitted = s.split("");
  //inverto le posizioni dell'array in modo da avere la stringa al contrario
  array_reverse = string_splitted.reverse();
  //converto l'array_reverse in una stringa
  string_reverse = array_reverse.join("");
  return string_reverse;

  /*Usando un ciclo for
  var string_reverse;
  //parto da s.length - 1 perchè cosi parto dall'ultima lettera della stringa(pos 4) fino a scendere alla prima lettera(pos 0)
  for (var i = s.length - 1; i >= 0; i--) {
    string_reverse += s[i];
  }
  return string_reverse;
  */
}
