const url = "http://gis.vantaa.fi/rest/tyopaikat/v1/Tekninen ala";


fetch('https://gis.vantaa.fi/rest/tyopaikat/v1/Tekninen%20ala')
    // Muunnetaan vastaus JSON muotoon 
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
        document.getElementById("tyopaikat").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    })

function kerro(data) {
    var teksti = "";

    //käydään jokainen työpaikka läpi
    teksti = teksti + "<h3>Tekniikan ala</h3><ul>";
    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "Työtehtävä: " + data[i].tyotehtava + "<br>";
        teksti = teksti + "Osoite: " + data[i].osoite + "<br>";
        teksti = teksti + "Linkki: " + "<a href='" + data[i].linkki + "'> " + data[i].linkki + "</a></p>";
    }

    //listaelementti kiinni
    teksti = teksti + "</ul>"


    // tulostus sivulle
    document.getElementById("tyopaikat").innerHTML = teksti;
}