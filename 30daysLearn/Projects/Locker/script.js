function display(val){
    document.getElementById("input").value+=val;
}
function clr(){
    document.getElementById("input").value ="";
}
function show()
{
    let x = document.getElementById("input").value;
    if(x == "1234")
    {
        window.alert("Correct Password");
    }
    else
    {
        window.alert("incorrect password");
    }
}