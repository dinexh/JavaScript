document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const candles = urlParams.getAll('candles[]');
    const name = urlParams.getAll('name[]');
    const options = urlParams.getAll('options[]');
    const price = urlParams.getAll('price[]');

    const outputContainer = document.getElementById('output-container');

    for (let i = 0; i < candles.length; i++) {
        const row = document.createElement('div');
        row.classList.add('output-row');
        row.innerHTML = `
            <p><strong>Candles:</strong> ${candles[i]}</p>
            <p><strong>Name:</strong> ${name[i]}</p>
            <p><strong>Options:</strong> ${options[i]}</p>
            <p><strong>Price:</strong> ${price[i]}</p>
        `;
        outputContainer.appendChild(row);
    }
});
