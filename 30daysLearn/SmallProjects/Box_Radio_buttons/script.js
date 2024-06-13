function printDetails() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
    const ssc = document.getElementById('ssc').value;
    const inter = document.getElementById('inter').value;
    const degree = document.getElementById('degree').value;
    const pg = document.getElementById('pg').value;

    const mainPrintDiv = document.getElementById('main-print');

    mainPrintDiv.innerHTML = `
        <p><strong>User Name:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>SSC Marks:</strong> ${ssc}</p>
        <p><strong>Inter Marks:</strong> ${inter}</p>
        <p><strong>Degree Marks:</strong> ${degree}</p>
        <p><strong>PG Marks:</strong> ${pg}</p>
    `;
}

document.getElementById('button').addEventListener('click', printDetails);
