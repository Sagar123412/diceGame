//generating random image1 using Math.random();

var randomNumber1 = Math.floor(Math.random()*6+1);
var randomImage1 = "dice"+randomNumber1+".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

//generating random image2 using same method

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomImage2 = "dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// Anouncing the winner on top of the images

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Playyer 1 Wins!";
}else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Game Draw";
} else {
    document.querySelector("h1").innerHTML = "Playyer 2 Wins!";
}
