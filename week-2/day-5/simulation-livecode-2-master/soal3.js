function generatePattern() {
    let row = parseInt(document.getElementById('row').value);
    let coordinate = document.getElementById('coordinate').value;

    let rowCoordinate = parseInt(coordinate[0]);
    let colCoordinate = parseInt(coordinate[1]);

    let result = '';
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= 5; j++) {
            if (i === rowCoordinate && j === colCoordinate) {
                result += '* ';
            } else {
                result += '# ';
            }
        }
        result += '\n';
    }

    document.getElementById('output').textContent = result;
}
