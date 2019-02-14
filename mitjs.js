function fremad(aktuelleFotoIndeks, fotoliste, fototekst) {
    if (aktuelleFotoIndeks < fotoliste.length - 1) {
        aktuelleFotoIndeks++;
        document.getElementById("bg").style.backgroundImage = "url(" + fotoliste[aktuelleFotoIndeks] + ")";
        document.getElementById("billedtekst").innerText = fototekst[aktuelleFotoIndeks];
        document.getElementById("lyd").innerHTML = "&olcir;";
    }
    return aktuelleFotoIndeks;
}

function tilbage(aktuelleFotoIndeks, fotoliste, fototekst) {
    if (aktuelleFotoIndeks > 0) {
        aktuelleFotoIndeks--;
        document.getElementById("bg").style.backgroundImage = "url(" + fotoliste[aktuelleFotoIndeks] + ")";
        document.getElementById("billedtekst").innerText = fototekst[aktuelleFotoIndeks];
        document.getElementById("lyd").innerHTML = "&olcir;"; //&olcir bestemmer grafikken på knappen
    }
    return aktuelleFotoIndeks;
}

function musikKontrol(musikstykke) {
    if (musikstykke.paused) {
        musikstykke.play();
        document.getElementById("lyd").innerHTML = "&otimes;";
    } else {
        musikstykke.pause();
        document.getElementById("lyd").innerHTML = "&olcir;";
    }
}

//Hovedprogramddel

var fotoliste = ["store.jpg", "street.jpg", "window.jpg", "facader.jpg", "hoi_an.jpg"];

var musikliste = ["Walker.mp3", "Bouncy_Fun_1.mp3", "Funky_Groove.mp3", "Walker.mp3", "Bouncy_Fun_1.mp3"];

var fototekst = [
    "Vi starter ud med en brunche blablablabl",
    "Vejret var fint, så vi gik en tur op af strøget",
    "Vi shoppede lidt her og der...",
    "Der var spændende butiksfacader at kigge på...", 
    "Så tog vi til lanternernes by Hoi An - Wauw!"
];

//Startværdi

var aktuelleFotoIndeks = 0;
var musikstykke = [];

for (var i = 0; i < musikliste.length; i++) {
    musikstykke[i] = new Audio(musikliste[i]);
    musikstykke[i].loop = true;
}

document.getElementById("bg").style.backgroundImage = "url(" + fotoliste[aktuelleFotoIndeks] + ")";
document.getElementById("billedtekst").innerText = fototekst[aktuelleFotoIndeks];

//Slut på startværdier

document.getElementById("fremad__knap").addEventListener("click", function () {
    musikstykke[aktuelleFotoIndeks].pause();
    aktuelleFotoIndeks = fremad(aktuelleFotoIndeks, fotoliste, fototekst);
});

document.getElementById("tilbage__knap").addEventListener("click", function () {
    musikstykke[aktuelleFotoIndeks].pause();
    aktuelleFotoIndeks = tilbage(aktuelleFotoIndeks, fotoliste, fototekst);
});

document.getElementById("lyd").addEventListener("click", function () {
    musikKontrol(musikstykke[aktuelleFotoIndeks]);
});

document.getElementById("hjem").addEventListener("click", function () {
    location.href = "index.html";
});
