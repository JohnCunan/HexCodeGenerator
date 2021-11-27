const btnChange = document.querySelector('#change');
const btnCopy = document.querySelector('#copy');
let color = '#FFFF';

function changeColor() {
    const hexcode = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + hexcode;
    document.getElementById("hex-code").innerHTML = hexcode;
    btnChange.style.backgroundColor = color;
    btnCopy.style.backgroundColor = color;
    return color;
}

function getCode() {
    $('<input>').val(color).appendTo('body').select()
    document.execCommand('copy')
    alert("Copied the hex code: " + color + " to the clipboard");
}

btnChange.addEventListener('click', () =>
    document.body.style.backgroundColor = changeColor());

btnCopy.addEventListener('click', () => 
    getCode());