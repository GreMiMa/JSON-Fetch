fetch('https://raw.githubusercontent.com/GreMiMa/JSON/refs/heads/main/palaveri.json')
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus 
    .then(function (responseJson) {
        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kerro(responseJson);
    })

    // Jos tuli jokin virhe 
    .catch(function (error) {
        document.getElementById("palaveri").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    })

function kerro(data) {
    var teksti = "";
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<h3>Sisältö</h3>";
    teksti = teksti + "<p>Aihe: " + data.palaveri.aihe + "</p>";
    teksti = teksti + "<p>Osallistujien lukumäärä: " + data.palaveri.osallistujien_lukumaara + "</p>";

    // taulukon sisältö listaelementtiin
    teksti = teksti + "<ul>";

    //objektitaulukon käsittely (nimi+arvo -pareja)
    teksti = teksti + "<h3>Osallistujat</h3>";
    for (var i = 0; i < data.osallistujat.length; i++) {
        teksti = teksti + "<li>" + data.osallistujat[i].nimi + " " + data.osallistujat[i].titteli + " " + "</a></li>";
    }

    //listaelementti kiinni
    teksti = teksti + "</ul>"

    teksti = teksti + "<h3>Paikka ja aika</h3>";
    teksti = teksti + "<p>Tila: " + data.paikka.tila + "</p>";
    teksti = teksti + "<p>Sijainti: " + data.paikka.sijainti + "</p>";
    teksti = teksti + "<p>Päivämäärä: " + data.aika.viikonpaiva + " " + data.aika.paivamaara + " " + data.aika.kuukausi + " " + data.aika.vuosi + "</p>";
    teksti = teksti + "<p>Kellonaika: " + data.aika.klo + "</p>";
    teksti = teksti + "<p>Kesto: " + data.aika.kesto + " h</p>";

    // tulostus sivulle
    document.getElementById("palaveri").innerHTML = teksti;
}