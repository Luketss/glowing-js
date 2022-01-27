function getRandomImage() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "images/dice" + randomNumber + ".png";
    return randomDiceImage
};

function getDiceWinner(num1, num2){
    if (num1 == num2){
        return "Draw"
    }
    if (num1 > num2) {
        return "Player 1 Wins"
    }
    else {
        return "Player 2 Wins"
    }
};

var randNum1 = getRandomImage()
var randNum2 = getRandomImage()



document.querySelector(".img1").src=randNum1;
document.querySelector(".img2").src=randNum2;
document.querySelector("#head").textContent=getDiceWinner(randNum1, randNum2);