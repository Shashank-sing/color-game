var level = 6;

var colors = getColors(level);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var messageDisplay = document.querySelector("#message");
var headerBackground = document.querySelector("h1");
var reset = document.querySelector(".new-colors");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

hard.addEventListener("click", hardMode);

function hardMode()
{
    level = 6;
    resetGame();
    easy.classList.remove("active");
    hard.classList.add("active");

}

easy.addEventListener("click", easyMode);

function easyMode()
{
    level = 3;
    resetGame();
    hard.classList.remove("active");
    easy.classList.add("active");



}


reset.addEventListener("click", resetGame);
function resetGame() {
    colors = getColors(level);
    pickedColor = colors[pickColor()];
    displayColor.textContent = pickedColor;
    headerBackground.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    reset.textContent = "New Colors";

    for (var i = 0; i < level; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    if(level==3)
    {
        squares[3].style.backgroundColor = "#232323";
        squares[4].style.backgroundColor = "#232323";
        squares[5].style.backgroundColor = "#232323";
        
    }

}



for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", check);
}

function check() {
    var currentColor = this.style.backgroundColor;
    console.log(pickedColor);
    if (currentColor === pickedColor) {
        message.textContent = "Correct";
        for (var i = 0; i < level; i++) {
            squares[i].style.backgroundColor = pickedColor;
        }
        headerBackground.style.backgroundColor = pickedColor;
        reset.textContent = "Play Again?";
            
            
    }
    else {
        this.style.backgroundColor = "#232323";
        message.textContent = "WRONG";
    }
}

var displayColor = document.getElementById("rgb");
displayColor.textContent = pickedColor;

function getColors(num) {
    var temp = [];

    for (var i = 0; i < num; i++) {
        temp.push(getRandom());
    }

    return temp;
}

function getRandom() {
    var s = "rgb(";
    for (var i = 0; i < 3; i++) {
        var rand = Math.floor(Math.random() * 256);
        s += rand;
        if (i != 2) {
            s += ", ";
        }
        else {
            s += ")";
        }
    }
    return s;
}

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return rand;
}

