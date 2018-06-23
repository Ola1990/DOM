var pierwszyDiv = document.getElementById("par-first");
console.log(pierwszyDiv);


//pobranie rodzica elemetu
var rodzicPierwszegoDiva = pierwszyDiv.parentElement;
console.log(rodzicPierwszegoDiva);


//childNodes pobiera wszystkie węzły elementu w tym białe znaki oraz komentarze
var dzieciSekcji = rodzicPierwszegoDiva.childNodes;
//pobranie konretnego dziecka za pomocą indeksu jak w tablicach
console.log(dzieciSekcji[1]);


//children pobiera dzieci elementu tylko te, które są też elementem
var fajniejszeDzieciSekcji = rodzicPierwszegoDiva.children;
console.log(fajniejszeDzieciSekcji);


//firstChild/firstElementChild - pobiera pierwsze dziecko elementu, przy czym firstChild pobiera wszystko (np. białe znaki), a firstElementChild tylko dziecko
var pierwszeDzieckoSekcji = rodzicPierwszegoDiva.firstElementChild;
console.log(pierwszeDzieckoSekcji);

//tak samo jest z ostatnim elementem:

var ostatnieDzieckoElementu = rodzicPierwszegoDiva.lastElementChild;
console.log(ostatnieDzieckoElementu);


//rodzeństwo
var link = document.querySelector("#par-first .link");

//previousElementSibling- pobiera porzedni element z tego samego poziomu
var rodzenstwoLink = link.previousElementSibling;
console.log(rodzenstwoLink);

//nextElementSibling- pobiera następny element z tego samego poziomu
var rodzenstwoLinkNastepny = link.nextElementSibling;
console.log(rodzenstwoLinkNastepny);

//sprawdzenie nodeType węzłów, nodeType==1- element HTML, 3- białe znaki
rodzicPierwszegoDiva.childNodes.forEach(function(element, index) {
 if( element.nodeType == 1){
     console.log(element);
 }
});




