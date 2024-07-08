document.getElementById('add-button').addEventListener('click', function() {
    const rowsContainer = document.getElementById('rows-container');
    const newRow = document.querySelector('.row').cloneNode(true);
    const inputs = newRow.querySelectorAll('input, select');
    inputs.forEach(input => input.value = '');
    rowsContainer.appendChild(newRow);
});

document.getElementById('submit-button').addEventListener('click', function() {
    const rows = document.querySelectorAll('.row');
    const formData = [];
    rows.forEach(row => {
        const candles = row.querySelector('#Candles').value;
        const name = row.querySelector('#name').value;
        const options = row.querySelector('#options').value;
        const price = row.querySelector('#price').value;
        formData.push({ candles, name, options, price });
    });

    // Encode formData as URL parameters
    const params = new URLSearchParams();
    formData.forEach(item => {
        params.append('candles[]', item.candles);
        params.append('name[]', item.name);
        params.append('options[]', item.options);
        params.append('price[]', item.price);
    });

    // Redirect to print.html with URL parameters
    window.location.href = `print.html?${params.toString()}`;
});
