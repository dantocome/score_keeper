var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var resetButton = document.getElementById("resetButton");
var dotted = document.getElementById("dot");
var isred = false;

p1Score = 0;
p2Score = 0;
winningScore = 5;
gameOver = false;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score===winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score===winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
})

changeInterval (()=>{
    if(isred){
        dotted.style.color= "green"
    }else{
        dotted.style.color = "red";
    }
    isred = !isred;
},1000);

