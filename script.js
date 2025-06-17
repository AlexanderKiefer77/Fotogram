

//console.log(pictures)

//let bild = document.getElementById('pictureField');
//bild.innerHTML = pictureSecond;



// Funktion zum Anzeigen der Bilder
//    function zeigeBilder(picturesArray) {
//     const container = document.getElementById("pictureField");
//      picturesArray.forEach(bild => {
//       const img = document.createElement("img");
//       img.src = bild;
//        img.alt = "Bild"; // Optional: Standard-Alt-Text
//       container.appendChild(img);        
//      })

//    }

// Bilder anzeigen
//  zeigeBilder(bilder);


//const imageArray = ["image1.jpg", "image2.png", "image3.gif"];
//const imageHTML = imageArray.map(image => `<img src="${image}" alt="Bild">`).join('');
//document.getElementById("pictureField").innerHTML = imageHTML;

//const bilder = ["bild1.jpg", "bild2.png", "bild3.gif"];
//const bildContainer = document.getElementById("pictureField");

//for (let i = 0; i < pictures.length; i++) {
//  const img = document.createElement("img");
//  img.src = pictures[i];
//img.alt = "Bild";
//  bildContainer.innerHTML(img);
//}


// Array mit Bild-URLs
const imageArray = [
    { src: './assets/img/pictureOne.jpg', alt: 'Bild 1', className: 'picture' },
    { src: './assets/img/pictureTwo.jpg', alt: 'Bild 2', className: 'picture' },
    { src: './assets/img/pictureThree.jpg', alt: 'Bild 3', className: 'picture' },
    { src: './assets/img/pictureFour.jpg', alt: 'Bild 4', className: 'picture' },
    { src: './assets/img/pictureFive.jpg', alt: 'Bild 5', className: 'picture' },
    { src: './assets/img/pictureSix.jpg', alt: 'Bild 6', className: 'picture' },
    { src: './assets/img/pictureSeven.jpg', alt: 'Bild 7', className: 'picture' },
    { src: './assets/img/pictureEight.jpg', alt: 'Bild 8', className: 'picture' },
    { src: './assets/img/pictureNine.jpg', alt: 'Bild 9', className: 'picture' },
    { src: './assets/img/pictureTen.jpg', alt: 'Bild 10', className: 'picture' },
    { src: './assets/img/pictureEleven.jpg', alt: 'Bild 11', className: 'picture' },
    { src: './assets/img/pictureTwelve.jpg', alt: 'Bild 12', className: 'picture' }
];

// Funktion zum Erstellen und Hinzufügen der Bilder
function displayImages() {

    const container = document.getElementById('pictureField'); 

    imageArray.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.className = image.className;
        container.appendChild(imgElement);
    });
}

displayImages();
