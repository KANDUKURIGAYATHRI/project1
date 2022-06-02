var a=Number(prompt("enter num"));
count=0;
for(let i=0;i<a/2;i++)
{
    if(a%i==0)
    {
        count=1;
    }
    else{
        count=0;
    }
}
if(count==0)
{
    document.write("prime");
}
else
{
    document.write("not prime");
}