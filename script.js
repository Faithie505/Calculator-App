//variables:
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
    one = document.getElementById("b2").innerHTML = "1";
}
function myFunction2()
{
    document.getElementById("b2").innerHTML += "2";
}
function myFunction3()
{
    document.getElementById("b2").innerHTML += "3";
}
function myFunction4()
{
    document.getElementById("b2").innerHTML += "4";
}
function myFunction5()
{
    document.getElementById("b2").innerHTML += "5";
}
function myFunction6()
{
    document.getElementById("b2").innerHTML += "6";
}
function myFunction7()
{
    document.getElementById("b2").innerHTML += "7";
}
function myFunction8()
{
    document.getElementById("b2").innerHTML += "8";
}
function myFunction9()
{
    document.getElementById("b2").innerHTML += "9";
}
function myFunction0()
{
    document.getElementById("b2").innerHTML += "0";
}