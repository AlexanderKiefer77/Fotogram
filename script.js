
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
    "Ausblick Hafen Richtung Lindau Nordseite",
    "Bregenz Hafen - MS Sonnenkönigin",
    "Ausblick Hafen Richtung Lindau Südseite"
]

let currentPictures = []; // muss definiert sein, sonst wird es in der function zu Fehler führen
let currentComments = [];


function render() {
    let pictureRef = document.getElementById('pictureField');
    //console.log(pictureRef);    
    //pictureRef.innerHTML = ''; // leert den Inhalt des div´s
    pictureRef.innerHTML = `<div class="headline">
                                <h1>Meine Fotos aus Bregenz 2025</h1>
                            </div>`
    for (let index = 0; index < pictures.length; index++) {
        pictureRef.innerHTML += pictureRendering(index);
    }
}

function pictureRendering(index) { // erstellt die kleinen Bilder    //
    return `<div>             
                <img src="./assets/img/${pictures[index]}" alt="Verschiedene Bilder aus Bregenz, vom Pfänder und vom Hafen" onclick="toggleOverlay(${index})" class="picture">                                               
            </div>`
}

 let overlayRef = document.getElementById('overlay'); // Variable dafür erstellt
function toggleOverlay(index) { // erstellt das große Bild beim anklicken eines kleinen Bildes
   
   // let overlayRefTwo = document.getElementById('pictureField');
    overlayRef.classList.toggle('overlayClass'); // class wird in div eingefügt
    //


    overlayRef.innerHTML = `<div class="innerOverlay">
                                <img src="./assets/back.png" alt="Pfeil nach Links" onclick="pictureBackwards()" class="arrow">
                                <figure>
                                    <img src="./assets/img/${pictures[index]}" alt="Foto ${commentsPictures[index]}" onclick="toggleOverlay()" class="pictureInOverlay">
                                    <h3>${commentsPictures[index]}<h3>
                                </figure>
                                <img src="./assets/forward.png" alt="Pfeil nach Links" onclick="pictureForwards(${[index]})" class="arrow">
                          </div>`;

   
}

function closePicture() {
    console.log("Bild schliessen");
    //location.reload(); // funktioniert, aber langsam

}

function pictureBackwards(index) {
    console.log(pictures[index]);

}

function pictureForwards(index) {
    console.log("Bild forwärts" + [index]);

}



// mit dieser function wird das eventbubbling verhindert auf der orangenene Fläche.
function logDownWBubblingPrevention(event) { // event wird übergeben
    console.log("logDown");
    event.stopPropagation(); // das ist eine function von diesem event
}