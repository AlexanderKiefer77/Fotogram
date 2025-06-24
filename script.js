
let pictures = [
    "pictureOne.jpg",
    "pictureTwo.jpg",
    "pictureThree.jpg",
    "pictureFour.jpg",
    "pictureFive.jpg",
    "pictureSix.jpg",
    "pictureSeven.jpg",
    "pictureEight.jpg",
    "pictureNine.jpg",
    "pictureTen.jpg",
    "pictureEleven.jpg",
    "pictureTwelve.jpg"
]

let commentsPictures = [
    "Ausblick vom Pfänder Richtung Österreich",
    "Ausblick vom Pfänder Richtung Schweiz",
    "Ausblick vom Pfänder zum Bodensee",
    "Ausblick vom Pfänder zum Bodensee",
    "Ausblick vom Pfänder zum Bodensee",
    "Ausblick vom Pfänder zum Bodensee",
    "Bregenz Hafen - MS Sonnenkönigin",
    "Bregenz Hafeneinfahrt",
    "Ausblick Hafen Richtung Lindau",
    "Ausblick Hafen Bregenz Nordseite",
    "Bregenz Blick von Promenade zum Hafen",
    "Ausblick Hafen Richtung Bregenz Südseite"
]

let overlayRef = document.getElementById('overlay');
let displayAOT = document.getElementById('aot');

function render() { // wird mit body onload gestartet, fügt die Überschrift hinzu und erstellt 
    // die kleinen Fotos in Verbindung mit der Funktion "pictureRendering"
    let pictureRef = document.getElementById('pictureField');
    pictureRef.innerHTML = `<div class="headline">
                                <h1>Meine Fotos aus Bregenz 2025</h1>
                            </div>`
    for (let index = 0; index < pictures.length; index++) {
        pictureRef.innerHTML += pictureRendering(index);
    }
}

function pictureRendering(index) { // erstellt die kleinen Bilder    //
    return `<div>             
                <img src="./assets/img/${pictures[index]}" alt="Verschiedene Bilder aus Bregenz, vom Pfänder und vom Hafen" onclick="openOverlay(${index})" class="picture">                                               
            </div>`
}

function openOverlay(index) { // erstellt den Inhalt des Overlay Bildes
    overlayPictureRendering(index);
    toggleOverlay(); // startet die toggle function
    displayAOT.classList.add("d_none"); // fügt dem AOT die class d_none hinzu, damit wird der Inhalt des AOT ausgeblendet
}

function overlayPictureRendering(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">                               
                                <figure>
                                    <img src="./assets/img/${pictures[index]}" alt="Foto ${commentsPictures[index]}" onclick="closeOverlay()" class="pictureInOverlay">
                                    <div class="navigate">
                                        <img src="./assets/back.png" alt="Pfeil Bild zurück" onclick="prevPicture(${index})" class="arrow">
                                        <figcaption>
                                            <h2>${commentsPictures[index]}</h2>
                                        </figcaption>    
                                        <img src="./assets/forward.png" alt="Pfeil Bild vorwärts" onclick="nextPicture(${index})" class="arrow">
                                    </div>
                                </figure>                                                            
                            </div>`;
}

function toggleOverlay() {
    overlayRef.classList.toggle('overlayClass');
}

function closeOverlay() { // function für Overlay zu schliessen
    overlayRef.innerHTML = ''; // leert den Inhalt des Overlay
    toggleOverlay(); // startet die toggle function
    displayAOT.classList.remove("d_none"); // entfernt dem AOT wieder die class d_none, damit wird der Inhalt des AOT wieder eingeblendet
}

function prevPicture(index) {    
    if (index > 0) {
        index = index - 1;
        overlayPictureRendering(index);
    } else if (index == 0) {
        index = pictures.length - 1;
        overlayPictureRendering(index);
    }   
}

function nextPicture(index) {
    if (index < pictures.length - 1) {
        index = index + 1;
        overlayPictureRendering(index);
    } else if (index = pictures.length) {
        index = 0;
        overlayPictureRendering(index);
    } 
}