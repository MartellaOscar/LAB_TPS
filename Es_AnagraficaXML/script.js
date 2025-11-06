let xhr = new XMLHttpRequest();

xhr.open('GET', 'nomi.xml', true);

xhr.responseType = 'document';

xhr.onload = function () {
    if (xhr.status === 200) {

        let xmlDoc = xhr.responseXML;

        let persone = xmlDoc.getElementsByTagName('persona');

        let lista = document.getElementById('listaNomi');

        for (let i = 0; i < persone.length; i++) {
            let nome = persone[i].getElementsByTagName('nome')[0].textContent;
            let cognome = persone[i].getElementsByTagName('cognome')[0].textContent;
            let eta = persone[i].getElementsByTagName('eta')[0].textContent;


            let li = document.createElement('li');
            li.textContent = nome + " " + cognome + "  età: "+ eta;
            lista.appendChild(li);
        }
    } else {
        console.error('Errore nel caricamento del file XML');
    }
};

xhr.onerror = function () {
    console.error('Errore di rete.');
};

xhr.send();
