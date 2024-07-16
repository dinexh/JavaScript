function generatepassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);       
    }
    document.getElementById("Password").value = password;
}

function togglepassword() {
    const passwordInput = document.getElementById("Password");
    const showButton = document.getElementById("visiblebutton");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showButton.textContent = "Show";
    }
}
