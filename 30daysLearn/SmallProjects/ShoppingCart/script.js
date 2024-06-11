function Sum() {
    const priceElements = document.getElementsByClassName('Price');
    let total = 0;
    for (let i = 0; i < priceElements.length; i++) {
        total += parseFloat(priceElements[i].textContent);
    }
    return total;
}

console.log(Sum());

// Optionally, display the total in the 'total' div
document.getElementById('total').textContent = `Total: $${Sum()}`;
