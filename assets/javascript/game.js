var randomNum;
var lost = 0;
var win = 0;
var currentScore = 0;


var resetAndStart = function() {

    $(".crystals").empty();

    var images = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Am%C3%A9thystre_sceptre2.jpg/1280px-Am%C3%A9thystre_sceptre2.jpg',
        'http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Amethystemadagascar2.jpg/2560px-Amethystemadagascar2.jpg',
        'https://static.turbosquid.com/Preview/2014/07/08__10_08_09/Crystals0010.jpgc22b2831-ae7a-4cb6-b4ac-612aa7f35ad7Original.jpg'
    ];

    randomNum = Math.floor(Math.random() * 101) + 19;


    $("#targetScore").html('Target Score: ' + randomNum);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"

        });


        $(".crystals").append(crystal);

    }

    $("#currentScore").html("Total Score: " + currentScore);

    $("#win").html("Wins: " + win);

    $("#losses").html("Losses: " + lost);

}


resetAndStart();

$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    currentScore += num;

    $("#currentScore").html("Total score: " + currentScore);

    console.log(currentScore);

    if (currentScore > randomNum) {

        lost++;
        alert("You suck sooo bad!");

        $("#lost").html("You lost: " + lost);

        currentScore = 0;

        resetAndStart();

    } else if (currentScore === randomNum) {

        win++;
        alert("Winner!");
        $("#win").html("You win: " + win);

        currentScore = 0;

        resetAndStart();

    }

});