//variables:
let display;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let zero;

document.getElementById("b2").addEventListener("load", make0); //number 1
function make0()
{
    document.getElementById("b2").innerHTML = "0";
}

//if a specific number is clicked, it calls out the function
document.getElementById("b15").addEventListener("click", myFunction); //number 1
document.getElementById("b16").addEventListener("click", myFunction2); //number 2
document.getElementById("b17").addEventListener("click", myFunction3); //number 3
document.getElementById("b11").addEventListener("click", myFunction4); //number 4
document.getElementById("b12").addEventListener("click", myFunction5); //number 5
document.getElementById("b13").addEventListener("click", myFunction6); //number 6
document.getElementById("b7").addEventListener("click", myFunction7); //number 7
document.getElementById("b8").addEventListener("click", myFunction8); //number 8
document.getElementById("b9").addEventListener("click", myFunction9); //number 9
document.getElementById("b20").addEventListener("click", myFunction0); //number 0


function myFunction()
{  
        display = "1";
        document.getElementById("b2").innerHTML += display;
}
function myFunction2()
{
    display = "2";
    document.getElementById("b2").innerHTML += display;
}
function myFunction3()
{
    display = "3";
    document.getElementById("b2").innerHTML += display;
}
function myFunction4()
{
    display = "4";
    document.getElementById("b2").innerHTML += display;
}
function myFunction5()
{
    display = "5";
    document.getElementById("b2").innerHTML += display;
}
function myFunction6()
{
    display = "6";
    document.getElementById("b2").innerHTML += display;
}
function myFunction7()
{
    display = "7";
    document.getElementById("b2").innerHTML += display;
}
function myFunction8()
{
    display = "8";
    document.getElementById("b2").innerHTML += display;
}
function myFunction9()
{
    display = "9";
    document.getElementById("b2").innerHTML += display;
}
function myFunction0()
{
    display = "0";
    document.getElementById("b2").innerHTML += display;
}