var output = document.getElementById("output");

//tworzę nowy element
var nowyElement = document.createElement("p");

nowyElement.setAttribute("id", "newelement"); //dodanie id

nowyElement.className = "nowa klasa";  //dodanie klasy

//tworzę tekst do nowego elementu
var elementContent = document.createTextNode("Zawartość akapitu");

//wstawiam kontent do akapitu
nowyElement.appendChild(elementContent);

//wstawiam nowy element do miejsca docelowego
output.appendChild(nowyElement);


//lub to samo prościej:

var nowyElement2 = document.createElement("button");
nowyElement2.innerHTML = "Zawartość buttona";
output.appendChild(nowyElement2);


//lub jeszcze inaczej:

output.innerHTML = "<h4 id='mmm'>Nagłówek H4</h4>"; //innerHTML nadpisuje, buttona nie widać


//usuwanie elementów- pierwszy paragraf w div#par-first oraz div#output

var rodzic = document.getElementById("par-first");
var akapit = rodzic.firstElementChild;
rodzic.removeChild(akapit);
rodzic.removeChild(document.getElementById("output"));  //usuwanie diva z id output
rodzic.parentElement.removeChild(rodzic);  //usuwanie rodzica


//usuwanie atrybutu
rodzic.removeAttribute("id");


//insertBefore
var rodzic2 = document.getElementById("par-second");
var newH6 = document.createElement("h6");
newH6.innerText = "Zawartość haszóstki";
var firstElem = rodzic2.firstElementChild;

rodzic2.insertBefore(newH6, firstElem); //element, ktory wstawiamy i element przed którym go wstawiamy



var tytul = document.getElementsByTagName("h1")[0];

tytul.innerHTML = "Nowa zawartość";  //w h1 zmieniamy zawartość
console.log( tytul.innerHTML ); //zwraca w konsoli zawartość h1
console.log( tytul.outerHTML ); //zwraca w konsoli całą h1
console.log( tytul.innerText ); //zwraca zawartość h1 bez znaczników



var linki = document.getElementsByTagName("a");
for( var i = 0; i < linki.length; i++) {
    console.log(linki[i].href); 
    console.log(linki[i].className); 
    if(i % 2 == 0){
        //classList.add dodaje klase
        //classList.remove usuwa klase
        linki[i].classList.add("decor-link");  //parzyste
    }else {
        linki[i].style.color = "red";   //nieparzyste
        linki[i].style.textDecoration = "none";
        linki[i].style.border = "2px dotted #000";
    }
}


