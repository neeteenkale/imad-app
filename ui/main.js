console.log('Loaded!');

// change the text of the 'main-text' div

var element = document.getElementById('main-text');

element.innerHTML = 'New Value from console'

// Move the image

var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 10;
    ing.style.marginLeft = marginLeft + 'px';
}

var ing = document.getElementById('madi');
ing.onclick = function() {
    ing.style.marginLeft = '100px';
};



