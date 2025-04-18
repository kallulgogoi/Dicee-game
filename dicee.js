var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent="Player 1 is the winner";
}
else if(randomNumber1===randomNumber2){
     document.querySelector(".container h1").textContent="It is a draw";
}
else{
     document.querySelector(".container h1").textContent="Player 2 is the winner";
}