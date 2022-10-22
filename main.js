document.getElementById("pizzaF").value = 1;
document.getElementById("pizzaH").value = 1;
document.getElementById("pizzaV").value = 1;
document.getElementById("pizzafm").value = 1;

function afficher(){
    var pizzaF = document.getElementById("pizzaF").value;
    var pizzaH = document.getElementById("pizzaH").value;
    var pizzaV = document.getElementById("pizzaV").value;
    var pizzafm = document.getElementById("pizzafm").value;
    var totale = 80 * pizzaF + 75 * pizzaH + 100 * pizzaV + 120 * pizzafm;
    var nom = document.getElementById("nom").value;
    var adresse = document.getElementById("adresse").value;
    var carteB = document.getElementById("carteB");
    var cheque = document.getElementById("cheque");
    var NcarteB = document.getElementById("NcarteB").value;
    if (carteB.checked) {
        if (nom != "" && adresse != "" && NcarteB != ""){
            var result = document.getElementById("result");
            result.value = totale;
        }else {alert("les champs nom du client , adresse , numero de la carte boncaire est obligatoire");}
    }else if (cheque.checked) {
        if (nom != "" && adresse != ""){
            var result = document.getElementById("result");
            result.value = totale;
        }else {alert("les champs nom du client , adresse est obligatoire");}
    }


}

function cartblock(){
    var NcarteB = document.getElementById("NcarteB");
    NcarteB.type = "text";
    var labelcart = document.getElementById("labelcart");
    labelcart.style.display = "inline";
}

function cartnone(){
    var NcarteB = document.getElementById("NcarteB");
    NcarteB.type = "hidden";
    var labelcart = document.getElementById("labelcart");
    labelcart.style.display = "none";
}