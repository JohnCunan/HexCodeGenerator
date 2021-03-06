const btnChange = document.querySelector('#change');
const btnCopy = document.querySelector('#copy');
let color = '#FFFF';

let changeColor = () => {
    const hexcode = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + hexcode;
    document.getElementById("hex-code").innerHTML = hexcode;
    btnChange.style.backgroundColor = color;
    btnCopy.style.backgroundColor = color;
    return color;
}

let getCode = () => {
    alert("Copied the hex code: " + color + " to the clipboard");
    const dummy = $('<input>').val(color).appendTo('body').select() //Bug in Google Chrome Mobile
    document.execCommand('copy')
    color.setSelectionRange(0, 99999); /* For mobile version */
}

btnChange.addEventListener('click', () =>
    document.body.style.backgroundColor = changeColor());

btnCopy.addEventListener('click', () => 
    getCode());