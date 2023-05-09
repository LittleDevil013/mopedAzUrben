let openText = document.getElementById('openText');

function hideOpenText() {
    openText.style.visibility = 'hidden';
};

function showOpenText() {
    openText.style.visibility = 'visible';
};

setInterval(hideOpenText , 1000);
setInterval(showOpenText , 2000);
