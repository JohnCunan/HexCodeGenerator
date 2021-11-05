let btnChange = document.querySelector('#change');
let btnCopy = document.querySelector('#copy');

var color;


function changeColor() {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hexcode = '';

    for (var i = 0; i < 6; i++) {
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index];
    }

    document.getElementById("hex-code").innerHTML = hexcode;
    btnChange.style.backgroundColor = '#' + hexcode;
    btnCopy.style.backgroundColor = '#' + hexcode;
    color = '#' + hexcode;

    

    return color;
}

btnChange.addEventListener('click', () =>
    document.body.style.backgroundColor = changeColor());

btnCopy.addEventListener('click', () => 
    alert("This feature will be added soon"));




