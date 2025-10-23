function CalcolaGenerazione(anno) {
    if (anno >= 1901 && anno <= 1927) return "Greatest Generation";
    if (anno > 1927 && anno <= 1945) return "Generazione Silenziosa";
    if (anno > 1945 && anno <= 1964) return "Baby Boomers";
    if (anno > 1964 && anno <= 1980) return "Generazione X";
    if (anno > 1980 && anno <= 1996) return "Millenials";
    if (anno > 1996 && anno <= 2012) return "Generazione Z";
    if (anno > 2012) return "Generazione Alpha";
    return "Sconosciuta";
}



function Tabella() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "dati.json");
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {

            FindGenerazione = 2025 - oggetto.archivio[i].eta;
            Generazione = CalcolaGenerazione(FindGenerazione);


            str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";
        }

        str = str + "</table>";

        document.getElementById("t1").innerHTML = str;
    }
}
function Maggiorenni() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "dati.json");

    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let Maggiorenni = 18;

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {
            if (oggetto.archivio[i].eta >= Maggiorenni) {

                FindGenerazione = 2025 - oggetto.archivio[i].eta;
                Generazione = CalcolaGenerazione(FindGenerazione);



                str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";
            }
        }
        str = str + "</table>";

        document.getElementById("t1").innerHTML = str;
    }
}
function RicercaLettera() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "dati.json");
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);
        let lettera = document.getElementById("lettera").value.toLowerCase();

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {

            FindGenerazione = 2025 - oggetto.archivio[i].eta;
            Generazione = CalcolaGenerazione(FindGenerazione);


            let cognome = oggetto.archivio[i].cognome.toLowerCase();
            if (cognome.startsWith(lettera)) {

                str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";

            }

        }
        str = str + "</table>";
        document.getElementById("t1").innerHTML = str;
    }
}
function RicercaGenerazione() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "dati.json");
    xhr.send();

    xhr.onload = function () {
        const oggetto = JSON.parse(xhr.responseText);
        let AnnoDiNascita = document.getElementById("generazione").value;

        let str = "<table><tr><th>Nome</th> <th>Cognome</th> <th>Età</th> <th>Anno di Nascita</th> <th>Generazione</th></tr>";

        let FindGenerazione;
        let Generazione;

        for (let i = 0; i < oggetto.archivio.length; i++) {

            FindGenerazione = 2025 - oggetto.archivio[i].eta;
            Generazione = CalcolaGenerazione(FindGenerazione);


            if (FindGenerazione == (AnnoDiNascita)) {
                str = str + "<tr><td>" + oggetto.archivio[i].nome + "</td><td>" + oggetto.archivio[i].cognome + "</td><td>" + oggetto.archivio[i].eta + " </td><td>" + FindGenerazione + "</td><td>" + Generazione + "</td></tr>";
            }
        }
        str = str + "</table>";
        document.getElementById("t1").innerHTML = str;
    }
}

