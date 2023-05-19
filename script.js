let openText = document.getElementById('openText');
let openScreen = document.getElementById('openScreen');
let textArea = document.getElementById('textArea');
let myPug;


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
            gameArea.start();
            myPug = new component(45, 30, "../mopedAzUrben/images/pug.png", 10, 50, "image");
           
           
        }
});

let gameArea = {
    canvas : document.createElement('canvas'),
    

    start : function() {
        this.canvas.setAttribute("id", "gameArea");
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },

    clear : function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == 'image') {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.update = function () {
        ctx = gameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    
}

function updateGameArea() {
    gameArea.clear();
    myPug.update();
}


