document.getElementById('calculateButton').addEventListener('click', function() {
    const number = Number(document.getElementById('numberInput').value);
    const square = number * number;
    document.getElementById('result').innerText = `The square of ${number} is ${square}`;
});