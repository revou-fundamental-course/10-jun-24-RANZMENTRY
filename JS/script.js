document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    if (isNaN(temperature)) {
        alert('Silakan masukkan angka yang valid.');
        return;
    }

    const result = (temperature * 9/5) + 32;
    document.getElementById('result').innerText = `Hasil: ${temperature}°C = ${result.toFixed(2)}°F`;
    document.getElementById('explanation').innerText = `Suhu dalam Fahrenheit diperoleh dengan mengalikan suhu dalam Celcius dengan 9/5, kemudian menambahkan 32.`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('temperatureForm').reset();
    document.getElementById('result').innerText = '';
    document.getElementById('explanation').innerText = '';
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    if (isNaN(temperature)) {
        alert('Silakan masukkan angka yang valid.');
        return;
    }

    const result = (temperature - 32) * 5/9;
    document.getElementById('result').innerText = `Hasil: ${temperature}°F = ${result.toFixed(2)}°C`;
    document.getElementById('explanation').innerText = `Suhu dalam Celcius diperoleh dengan mengurangkan suhu dalam Fahrenheit dengan 32, kemudian mengalikan 5/9.`;
});
