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