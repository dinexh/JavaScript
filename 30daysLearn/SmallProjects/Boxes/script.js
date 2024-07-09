document.getElementById('add-button').addEventListener('click', function() {
    addNewRow();
});

function addNewRow() {
    const rowsContainer = document.getElementById('rows-container');
    const newRow = document.querySelector('.row').cloneNode(true);
    const inputs = newRow.querySelectorAll('input, select');
    inputs.forEach(input => input.value = '');
    newRow.querySelector('#add-button').addEventListener('click', addNewRow);
    rowsContainer.appendChild(newRow);
}

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

    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = ''; 
    
    formData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('final');
        div.innerHTML = `
            <div class="box-in"><label>Candles: ${item.candles}</label></div>
            <div class="box-in"><label>Name: ${item.name}</label></div>
            <div class="box-in"><label>Options: ${item.options}</label></div>
            <div class="box-in"><label>Price: ${item.price}</label></div>
        `;
        outputContainer.appendChild(div);
    });
});
