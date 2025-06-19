
let picturesArray = [
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
    pictureRef.innerHTML = ''; // leert den Inhalt des div´s

    for (let index = 0; index < picturesArray.length; index++) {
        pictureRef.innerHTML += pictureRendering(index);
    }
    
}


function pictureRendering(index) { // erstellt die kleinen Bilder
    
    return `<div>             
                <img src="./assets/img/${picturesArray[index]}" alt="Bilder aus Bregenz" onclick="toggleOverlay(${index})" class="picture">                                               
            </div> `
}

function toggleOverlay(index) { // erstellt das große Bild beim anklicken eines kleinen Bildes
    let overlayRef = document.getElementById('overlay'); // Variable dafür erstellt

    overlayRef.classList.toggle('d_none'); // class wird in div eingefügt

    overlayRef.innerHTML = `<div class="innerOverlay">
                                <img src="./assets/back.png" alt="Pfeil nach Links" onclick="pictureBackwards()" class="arrow">
                                <img src="./assets/img/${picturesArray[index]}" class="pictureInOverlay">
                                <img src="./assets/forward.png" alt="Pfeil nach Links" onclick="pictureForwards(${[index]})" class="arrow">
                          </div>`

}

function pictureBackwards(index) {
    console.log(picturesArray[index]);
    
}

function pictureForwards(index) {
    console.log("Bild forwärts" + [index]);
    
}