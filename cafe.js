fetch('https://raw.githubusercontent.com/GreMiMa/JSON/refs/heads/main/data.json')
    // Muunnetaan vastaus JSON muotoon 
    .then(function (response) {
        return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus 
    .then(function (responseJson) {
        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kutsu(responseJson);
    })

    // Jos tuli jokin virhe 
    .catch(function (error) {
        document.getElementById("vastaus1").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    })

function kutsu(data) {
    var teksti = "";
    teksti = "<h1>" + data.yritys + "</h1>";
    teksti = teksti + "<h3>Yhteystiedot</h3>";
    teksti = teksti + "<p>" + data.yhteystiedot.osoite + "<br>" + data.yhteystiedot.puhelin + "<br>" + data.yhteystiedot.email + "</p>";

    // taulukon sisältö listaelementtiin, tuotteet
    teksti = teksti + "<ul>";

    //taulukon käsittely for-lauseessa (pelkkiä arvoja)
    teksti = teksti + "<h3>Tuotteet</h3><ul>";
    for (var i = 0; i < data.tuotteet.length; i++) {
        teksti = teksti + "<li>" + data.tuotteet[i] + "</li>";
    }

    // taulukon sisältö listaelementtiin, henkilökunta
    teksti = teksti + "</ul>";

    //objektitaulukon käsittely (nimi+arvo -pareja)
    teksti = teksti + "<h3>Henkilökunta</h3><ul>";
    for (var i = 0; i < data.henkilokunta.length; i++) {
        teksti = teksti + "<li>" + data.henkilokunta[i].nimi + " " + data.henkilokunta[i].titteli + " " + "</a></li>";
    }

    //listaelementti kiinni
    teksti = teksti + "</ul>"




    // tulostus sivulle
    document.getElementById("vastaus1").innerHTML = teksti;
}
