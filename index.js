var r1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "dice" + r1 + ".png";
var source1 = "images/" + dice1;
var image1 = document.querySelector(".img1");

image1.setAttribute("src", source1);

var r2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "dice" + r2 + ".png";
var source2 = "images/" + dice2;
var image2 = document.querySelector(".img2");

image2.setAttribute("src", source2);

if (r1 > r2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if (r2 > r1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}