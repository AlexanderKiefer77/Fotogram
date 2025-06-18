
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
    currentPictures = picturesArray;

    for (let index = 0; index < currentPictures.length; index++) {
        pictureRef.innerHTML += pictureRendering(index, currentPictures);
    }
}


function pictureRendering(index) {
    return `<div>             
                <img src="./assets/img/${currentPictures[index]}" onclick="message()" class="picture">                                               
            </div> `
}



function message() {
    console.log("Och Nöö");
}

