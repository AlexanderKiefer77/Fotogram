
let pictures = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg"
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
    "Ausblick Hafen Richtung Bregenz Südseite",
    "Ausblick vom Pfänder auf Bregenz",
    "Ausblick vom Pfänder Richtung Österreich",
    "Ausblick in den Hafen",
    "Ausblick Hafen Bregenz"
]

let overlayRef = document.getElementById('overlay');
let displayAOT = document.getElementById('aot');
let displayFooter = document.getElementById('footer');

function render() { // starts with body onload, adds the heading and render 
                    // the small photos with the function "pictureRendering"
    let pictureRef = document.getElementById('pictureField');
    pictureRef.innerHTML = `<div class="headline">
                                <h1>Meine Fotos aus Bregenz 2025</h1>
                            </div>`
    for (let index = 0; index < pictures.length; index++) {
        pictureRef.innerHTML += pictureRendering(index);
    }
}

function pictureRendering(index) { // render small pictures  //
    return `<div>             
                <img src="./img/${pictures[index]}" alt="kleines Foto ${commentsPictures[index]}" onclick="openOverlay(${index})" class="picture">                                               
            </div>`
}

function openOverlay(index) { // render the Overlay picture
    overlayPictureRendering(index);
    toggleOverlay(); // starting toggle function
    displayAOT.classList.add("d_none"); // add AOT the class d_none, This hides the contents of the AOT    
    displayFooter.classList.add("footerFixing");
}

function overlayPictureRendering(index) {
    overlayRef.innerHTML = `<div class="innerOverlay">
                                <b>zum schliessen auf das Bild klicken</b>                        
                                <figure>
                                    <img src="./img/${pictures[index]}" alt="Foto ${commentsPictures[index]}" onclick="closeOverlay()" class="pictureInOverlay">
                                    <div class="navigate">
                                        <img src="./assets/back.png" alt="Pfeil Bild zurück" onclick="prevPicture(${index})" class="arrow">
                                        <figcaption>
                                            <h2>${commentsPictures[index]}</h2>
                                        </figcaption>    
                                        <img src="./assets/forward.png" alt="Pfeil Bild vorwärts" onclick="nextPicture(${index})" class="arrow">
                                    </div>
                                </figure>                                                            
                            </div>`;
    openFullscreen();
}

function toggleOverlay() {
    overlayRef.classList.toggle('overlayClass');
}

function closeOverlay() { // function closing the Overlay
    overlayRef.innerHTML = ''; // clears the contents of the overlay
    toggleOverlay(); // starts toggle function
    displayAOT.classList.remove("d_none"); // removed AOT class d_none, This will display the contents of the AOT again
    closeFullscreen();
}

function prevPicture(index) { // function big picturer backwards
    if (index > 0) {
        index = index - 1;
        overlayPictureRendering(index);
    } else if (index == 0) {
        index = pictures.length - 1;
        overlayPictureRendering(index);
    }
}

function nextPicture(index) { // function big picture forwards
    if (index < pictures.length - 1) {
        index = index + 1;
        overlayPictureRendering(index);
    } else if (index = pictures.length) {
        index = 0;
        overlayPictureRendering(index);
    }
}

let elem = document.documentElement;

    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }