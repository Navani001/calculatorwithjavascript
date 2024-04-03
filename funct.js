let val=""
function append(val)
{
    document.getElementById("out2").value+=val;
}
function e()
{
    document.getElementById("out2").value=eval(out2.value);
}
function ac()
{
    document.getElementById("out2").value='';
}
function CE()
{   let len=out2.value.length;
    document.getElementById("out2").value=out2.value.slice(0,len-1);
}
