function pobierzImie(ev) {
    ev.preventDefault();
    var mojaZmienna = document.getElementsByTagName("input");
    var imie = document.getElementsByTagName("input")[0].value;
    var nazwisko = document.getElementsByTagName("input")[1].value;
    console.log(imie, nazwisko);
    }
