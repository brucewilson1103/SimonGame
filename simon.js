var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level "+ level);
        nextSequence();
        started = true;
    }
}
);

$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //    console.log(userClickedPattern);
    playsound(userChosenColor);
    animateClick(userChosenColor)
});

function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);

    var randomColorSelector = buttonColors[randomNumber];
    gamePattern.push(randomColorSelector);

    $("#" + randomColorSelector.fadeIn(100).fadeOut(100).fadeIn(100));

   playsound(randomColorSelector);
}

function playsound (name){
 var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
};

function animateClick(currentColor) {
    $("#" + currentColor).addclass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
    
}