var wyslijBtn = document.getElementById("wyslij");
//inut name
var inputimie = document.getElementById("name");
//input elmail
var inputEmail = document.getElementById("email");
//zgoda1
var zgoda1 = document.getElementById("zgoda-marketingowa-1");
//zgoda2
var zgoda2 = document.getElementById("zgoda-marketingowa-2");
//wszystkie zgody
var wszystkieZgody = document.getElementById("wszystkie-zgody");

//lista z komunikatami błędów
var wiadomosci = document.getElementById("wiadomosc");

//pod zdarzenie change dla checkbox wszystkie zgody podpinam funkcję checkboxState
wszystkieZgody.addEventListener("change", checkboxState);

//funkcja chceckboxState kontrolująca stan dwóch pierwszych chcecboxów
function checkboxState(){
    //jeśli dla checkboxa wszystkie zgody checked == true to dla reszty zgód ustaw checked na true
    zgoda1.checked = wszystkieZgody.checked;
    zgoda2.checked = wszystkieZgody.checked;
    
    //jeśli dla checkboxa wszystkie zgody checked == true to dla reszty zgód ustaw disabled na true
    
    zgoda1.disabled = wszystkieZgody.checked;
    zgoda2.disabled = wszystkieZgody.checked;
    
}

function validateForm(ev) {
    //pobieram wszystkie inputy
    var inputs = document.querySelectorAll("input");
    //czyszczenie listy z komunikatami błędów
    wiadomosci.innerHTML = "";
    
    //przechodzę pętlą po pobranych inputach
    inputs.forEach(function( el, ind ) {
        //waliduję tylko 3 pierwsze ola formularza, dlatego wszystkie pola z indeksem >2 mnie nie interesują, więc kończę funkcję słowem return
        if( ind > 2) {
            return;
        }
        //warunek dla checkboxa
        if(ind == 2){
          if( el.checked == false ) {
              var errorLi = document.createElement("li");
              errorLi.innerHTML = "Nie zaznaczono zgody";
              wiadomosci.appendChild(errorLi);
              ev.preventDefault();
          }  
        }else {
            if( el.value == ""){
                var errorLi = document.createElement("li");
                errorLi.innerHTML = "Nie wypełniono pola";
                wiadomosci.appendChild(errorLi);
                ev.preventDefault();
            }
        }
    });
}

//po zdarzeniu click przycisku podpinam funkcje walidującą formularz validateForm
wyslijBtn.addEventListener("click", validateForm);