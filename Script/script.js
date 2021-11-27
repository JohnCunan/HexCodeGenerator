const btnChange = document.querySelector('#change');
const btnCopy = document.querySelector('#copy');


function changeColor() {
    const hexcode = Math.floor(Math.random()*16777215).toString(16);
    const color = '#' + hexcode;

    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementById("box").value = color;
    btnChange.style.backgroundColor = color;
    btnCopy.style.backgroundColor = color;
    
    return color;
}

function getCode() {
    var copyText = document.getElementById("box");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile version */

    navigator.clipboard.writeText(copyText.value);
    alert("Copied the hex code: " + copyText.value + " to the clipboard");
}

btnChange.addEventListener('click', () =>
    document.body.style.backgroundColor = changeColor());

btnCopy.addEventListener('click', () => 
    getCode());