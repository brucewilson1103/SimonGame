var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //    console.log(userClickedPattern);
    playsound(userChosenColor);
    animateClick(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("successful pattern match");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }} else {
            console.log("wrong pattern");
            playsound("wrong");

            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }}

function nextSequence() {
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);

    var randomColorSelector = buttonColors[randomNumber];
    gamePattern.push(randomColorSelector);

    $("#" + randomColorSelector).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomColorSelector);
}

function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animateClick(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function startOver(){
    level =0;
    gamePattern = [];
    started = false;
}