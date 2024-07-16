function printDetails() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderInputs).map(input => input.value).join(', ') || 'Not specified';
    const domain = document.getElementById('domain').value;

    const mainPrintDiv = document.getElementById('main-print');

    mainPrintDiv.innerHTML = `
        <p><strong>User Name:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Domain:</strong> ${domain}</p>
    `;
}

document.getElementById('submit').addEventListener('click', printDetails);
