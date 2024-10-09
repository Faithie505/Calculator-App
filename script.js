document.getElementById("b18").addEventListener("click", cleared);

function cleared()
{
   document.getElementById("result").value = "";
    document.getElementById("result").innerHTML = "";
}

//displays the calculations on the screen
function display(val)
{
    document.getElementById("result").value += val;
    document.getElementById("result").innerHTML += val;
    
}

//does the caalculation of the answer and displays it on the screen when equals is clicked
function solve()
{
    let x = document.getElementById("result").value;
    let y = eval(x);
    let equation = document.getElementById("result").value;
    document.getElementById("result").value = y;
    document.getElementById("result").innerHTML = y;

   document.getElementById("prevCalc").innerHTML = equation+" = "+ y;
}




