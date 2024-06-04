function Hello()
{
    console.log("hello world");
}
Hello();
// can use document.write while doing in html
function Declartion()
{
    let Number = 10.09;
    let Name = "Jane Doe"
    let Id = 2300030350;
    console.log("Name:" + Name + "Number:" + Number + "Id: " + Id);
}
Declartion()
// Operations 
// Arthimatic Operators
function Addition(a,b)
{
    return a+b;
}
function Subbraction(a,b)
{
    return a-b;
}
Subbraction();
function Division(a,b)
{
    return a/b;
}
Division();
function Multipication(a,b)
{
    return a*b;
}
Multipication();
function Operations()
{
    let a = 10;
    let b = 50;
    let sum = Addition(a,b);
    let sub = Subbraction(a,b);
    let product = Multipication(a,b);
    console.log (sum);
    console.log (sub);
    console.log (product);
}
Operations();