
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
    "Ausblick vom Pfänder zum Bodensee Richtung Lindau",
    "Ausblick vom Pfänder zum Bodensee Richtung Lindau",
    "Bregenz Hafen - MS Sonnenkönigin",
    "Bregenz Hafeneinfahrt",
    "Ausblick Hafen Richtung Lindau",
    "Ausblick Hafen Richtung Bregenz Nordseite",
    "Bregenz Hafen - Blick von Promenade zum Hafen",
    "Ausblick Hafen Richtung Bregenz Südseite"
]

let currentPictures = []; // muss definiert sein, sonst wird es in der function zu Fehler führen
let currentComments = [];


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


let overlayRef = document.getElementById('overlay');
let displayAOT = document.getElementById('aot');

function openOverlay(index) { // erstellt den Inhalt des Overlay Bildes
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <img src="./assets/back.png" alt="Pfeil nach Links" onclick="pictureBackwards()" class="arrow">
                                <figure>
                                    <img src="./assets/img/${pictures[index]}" alt="Foto ${commentsPictures[index]}" onclick="closeOverlay()" class="pictureInOverlay">
                                    <h3>${commentsPictures[index]}<h3>
                                </figure>
                                <img src="./assets/forward.png" alt="Pfeil nach Links" onclick="pictureForwards(${[index]})" class="arrow">
                          </div>`;
    toggleOverlay(); // startet die toggle function
    
  displayAOT.classList.add("d_none"); // fügt dem AOT die class d_none hinzu, damit wird der Inhalt des AOT ausgeblendet
}

function toggleOverlay() {   
    overlayRef.classList.toggle('overlayClass');  
}


function closeOverlay() { // function für Overlay zu schliessen
    overlayRef.innerHTML = ''; // leert den Inhalt des Overlay
    toggleOverlay(); // startet die toggle function
    displayAOT.classList.remove("d_none"); // entfernt dem AOT wieder die class d_none, damit wird der Inhalt des AOT wieder eingeblendet
}


function pictureBackwards(index) {
    console.log("Bild zurück");
}

function pictureForwards(index) {
    console.log("Bild forwärts" + [index]);
}



// mit dieser function wird das eventbubbling verhindert auf der orangenene Fläche.
function logDownWBubblingPrevention(event) { // event wird übergeben
    console.log("logDown");
    event.stopPropagation(); // das ist eine function von diesem event
}