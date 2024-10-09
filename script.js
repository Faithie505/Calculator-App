//variables:


//displays the calculations on the screen
function display(val)
{
    document.getElementById("result").value += val;
    document.getElementById("result").innerHTML += val;
    
}



function solve()
{
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    document.getElementById("result").innerHTML = y;
}
