//getElementById - nazwa ide;ementu bez #
var elementPoId = document.getElementById("par-first");
console.log(elementPoId);

//getElementsByClassName- nazwa klasy elementu bez .
//do konkretnych elementów pobranej kolekcji dostajemy się za pomocą indeksów i nawiasów kwadratowych jak w tablicach
var elementyPoKlasie = document.getElementsByClassName("link");
console.log(elementyPoKlasie);

for(var i = 0; i < elementyPoKlasie.length; i++ ) {
    console.log( elementyPoKlasie[i]);
}

//getElementsByTagName pobiera kolekcje elementów. Do konkretnych elementów dostajemy się za pomocą indeksów jak w tablicy np. elementyPoTagu[0]
var elementyPoTagu = document.getElementsByTagName("a");
console.log(elementyPoTagu);

//querySelector - pobiera pierwszy znaleziony element o danym selektorze. 
//WAŻNE!! jeśli wybieramy element po klasie albo id należy w wywołaniu metody użyć       . albo #
var qsElementPoId = document.querySelector("#par-second");
console.log(qsElementPoId);

//querySelectorAll - jw tylko pobiera wszystkie elementy po wskazanym selektorze
// tutaj można przejść po elementach za pmocą metody forEach
var qsElementyPoKlasie = document.querySelectorAll(".superlink");
console.log(qsElementyPoKlasie);