
var n1=Math.floor(Math.random()*6) + 1;

var randomDiceImg = "dice" + n1 + ".png";

var randomDiceSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0]   ;

image1.setAttribute("src" , randomDiceSource);



//img 222


var n2=Math.floor(Math.random()*6) + 1;

var randomDiceSource = "images/dice" + n2 + ".png";

var image2 = document.querySelectorAll("img")[1]   ;

image2.setAttribute("src" , randomDiceSource);

if(n1 > n2)
{
  document.querySelector("h1").innerHTML = "Winner Player 1";
}
else if(n1 == n2)
{
  document.querySelector("h1").innerHTML = " DRAW ";
}
else
{
  document.querySelector("h1").innerHTML = "Winner Player 2";
}
