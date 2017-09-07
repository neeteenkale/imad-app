console.log('Loaded!');

// change the text of the 'main-text' div

var element = document.getElementById('main-text');

element.innerHTML = 'New Value from console'

// Move the image

var ing = document.getElementById('madi');
ing.onclick = function() {
    ing.style.marginLeft = '100px';
};



