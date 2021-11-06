let btnChange = document.querySelector('#change');
let btnCopy = document.querySelector('#copy');
let color;

function changeColor() {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hexcode = '';

    for (var i = 0; i < 6; i++) {
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index];
    }

    color = '#' + hexcode;

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