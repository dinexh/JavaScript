function generatepasword()
{
    const lenght = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = " ";
    for(let i = 0;i<lenght;i++)
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);       
    }
    document.getElementById("Password").value = password;
}
function togglepasword(){
    const passwordinput = document.getElementById("Password");
    const show = document.getElementById("visiblebutton");
    if(passwordinput.type === "password")
        {
            passwordInput.type = "text";
            visiblebutton.textContent = "Hide";           
        }
}