var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

for (var i = 1; i <= 6; i++) {
    if (i === randomNumber1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    }

    if (i === randomNumber2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    }
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 wins!";
}
