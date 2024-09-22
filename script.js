function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

