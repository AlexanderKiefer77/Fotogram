
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

let currentPictures = []; // muss definiert sein, sonst wird es in der function zu Fehler führen

function render() {
    let pictureRef = document.getElementById('pictureField');
    console.log(pictureRef);
    
    pictureRef.innerHTML = ''; // leert den Inhalt des div´s

    for (let index = 0; index < pictures.length; index++) {
        pictureRef.innerHTML += pictureRendering(index);
    }    
}

function pictureRendering(index) { // erstellt die kleinen Bilder    //
    return `<div>             
                <img src="./assets/img/${pictures[index]}" alt="Bilder aus Bregenz" onclick="openOverlay(${index})" class="picture">                                               
            </div> `
}



function openOverlay(index) { // erstellt das große Bild beim anklicken eines kleinen Bildes
    let overlayRef = document.getElementById('overlay'); // Variable dafür erstellt
  
    //overlayRef.classList.add ('d_none'); // class wird in div eingefügt

    overlayRef.innerHTML = `<div class="innerOverlay">
                                <img src="./assets/back.png" alt="Pfeil nach Links" onclick="pictureBackwards()" class="arrow">
                                <img src="./assets/img/${pictures[index]}" onclick="closePicture()"class="pictureInOverlay">
                                <img src="./assets/forward.png" alt="Pfeil nach Links" onclick="pictureForwards(${[index]})" class="arrow">
                          </div>`
console.log(overlayRef);
}

function pictureBackwards(index) {
    console.log(pictures[index]);
    
}

function pictureForwards(index) {
    console.log("Bild forwärts" + [index]);
    
}

function closePicture() {
    console.log("Bild schliessen");
    
}

// mit dieser function wird das eventbubbling verhindert auf der orangenene Fläche.
        function logDownWBubblingPrevention(event) { // event wird übergeben
            console.log("logDown");
            event.stopPropagation(); // das ist eine function von diesem event
        }