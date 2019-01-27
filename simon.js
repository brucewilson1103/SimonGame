gamePattern = [];

buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    var randomColorSelector = buttonColors[randomNumber];
    gamePattern.push(randomColorSelector);
}