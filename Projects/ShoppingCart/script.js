function sum() {
    const quantities = document.getElementsByClassName('No');
    const prices = document.getElementsByClassName('Price');
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        const quantity = parseInt(quantities[i].value);
        const price = parseFloat(prices[i].textContent);

        total += quantity * price;
    }

    const totalDiv = document.getElementById('total');
    totalDiv.textContent = 'Total: $' + total;
}

document.getElementById('submit').addEventListener('click', sum);
