let a= [1,2,3,4,5,6,7,8,9];
let temp = a[0];
for(let i = a[0];i<a[10];a[10]++)
{
    if(temp<a[i])
    {
        temp = a[i];
    }
}

console.log(temp);