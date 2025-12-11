const catalogo = document.getElementById("catalogo");

// ---------------------------
// CREA UNA CARD HTML
// ---------------------------
function createCard(prod) {
    return `
        <div class="card">
            <h3>${prod.nome}</h3>
            <div class="price">${prod.prezzo} €</div>
            <p>${prod.descrizione}</p>
            <button>Acquista</button>
        </div>
    `;
}

// ---------------------------
// LETTURA JSON
// ---------------------------
async function loadJSON(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.map(p => ({
        nome: p.nome,
        prezzo: p.prezzo,
        descrizione: p.descrizione
    }));
}

// ---------------------------
// LETTURA CSV
// formato: nome;prezzo;descrizione
// ---------------------------
async function loadCSV(url) {
    const res = await fetch(url);
    const text = await res.text();

    return text
        .trim()
        .split("\n")
        .map(riga => {
            const [nome, prezzo, descrizione] = riga.split(";");
            return { nome, prezzo, descrizione };
        });
}

// ---------------------------
// LETTURA TXT
// formato tipo:
// Prodotto | 10 | Descrizione del testo
// ---------------------------
async function loadTXT(url) {
    const res = await fetch(url);
    const text = await res.text();

    return text
        .trim()
        .split("\n")
        .map(riga => {
            const [nome, prezzo, descrizione] = riga.split("|");
            return { nome, prezzo, descrizione };
        });
}

// ---------------------------
// LETTURA XML
// formato:
// <prodotti>
//   <prodotto>
//      <nome>...</nome>
//      <prezzo>...</prezzo>
//      <descrizione>...</descrizione>
//   </prodotto>
// </prodotti>
// ---------------------------
async function loadXML(url) {
    const res = await fetch(url);
    const xmlText = await res.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "text/xml");

    const prodotti = xml.getElementsByTagName("prodotto");

    return Array.from(prodotti).map(p => ({
        nome: p.getElementsByTagName("nome")[0].textContent,
        prezzo: p.getElementsByTagName("prezzo")[0].textContent,
        descrizione: p.getElementsByTagName("descrizione")[0].textContent
    }));
}

// ---------------------------
// CARICA TUTTI I FILE E MOSTRA LE CARD
// ---------------------------
async function init() {
    const json = await loadJSON("files/prodotti.json");
    const csv  = await loadCSV("files/prodotti.csv");
    const txt  = await loadTXT("files/prodotti.txt");
    const xml  = await loadXML("files/prodotti.xml");

    const tutti = [...json, ...csv, ...txt, ...xml];

    catalogo.innerHTML = tutti.map(createCard).join("");
}

init();
