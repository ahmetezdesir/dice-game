var dice1Cond;
var dice2Cond;

function rollDice() {
    document.querySelector(".p1").style.color = "#B5FFD9";
    document.querySelector(".p2").style.color = "#B5FFD9";
    document.querySelector(".p1").innerHTML = "Player 1";
    document.querySelector(".p2").innerHTML = "Player 2";
    var sound = document.querySelectorAll("audio")[0];
    sound.play();
    var intervalID;
    // var intervalID2;
    sound.onended = function () {
        clearInterval(intervalID);
        intervalID = null;
        document.querySelectorAll("audio")[1].play();
        if (dice1Cond > dice2Cond) {
            document.querySelector(".p1").style.color = "yellow";
            document.querySelector(".p1").innerHTML = "Player 1 won!";
        } else if (dice1Cond < dice2Cond) {
            document.querySelector(".p2").style.color = "yellow";
            document.querySelector(".p2").innerHTML = "Player 2 won!";
        } else {
            // it is draw
            document.querySelector(".p1").style.color = "yellow";
            document.querySelector(".p2").style.color = "yellow";
            document.querySelector(".p1").innerHTML = "Player 1 won!";
            document.querySelector(".p2").innerHTML = "Player 2 won!";
        }
    }
    intervalID = setInterval(changeDiceImg, 500);
}

function changeDiceImg() {
    var randomNumber = (Math.random() * 6) + 1;
    randomNumber = Math.floor(randomNumber);
    dice1Cond = randomNumber;
    // document.querySelector(".dice1").src = "images/dice" + randomNumber + ".png";
    document.querySelector(".dice1").setAttribute("src", "images/dice" + randomNumber + ".png");

    var randomNumber2 = (Math.random() * 6) + 1;
    randomNumber2 = Math.floor(randomNumber2);
    dice2Cond = randomNumber2;
    // document.querySelector(".dice2").src = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
}