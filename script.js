let openText = document.getElementById('openText');
let openScreen = document.getElementById('openScreen');
let textArea = document.getElementById('textArea');

function hideOpenText() {
    openText.style.visibility = 'hidden';
};

function showOpenText() {
    openText.style.visibility = 'visible';
};

setInterval(hideOpenText , 1000);
setInterval(showOpenText , 2000);

function clearOpenScreen() {
    openScreen.remove();
    textArea.remove();
    openText.remove();
};

window.addEventListener('keydown' , function(event) {
        if (event.keyCode === 32) {
            clearOpenScreen();
            let backgroundMusic = new Audio('../mopedAzUrben/music/backMusic.mp3');
            backgroundMusic.play();
            backgroundMusic.loop = true;
            createGameArea();
           
        }
});

function createGameArea() {
    let canvas = document.createElement('canvas');
    canvas.setAttribute("id" , "gameArea");
    context = canvas.getContext('2d');
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    
}
