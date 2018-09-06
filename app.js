var loses = 0;
var wins = 0;

var play = function (userChoice) {

    document.getElementById("player").innerHTML = "";
    document.getElementById("opponent").innerHTML = "";
    document.getElementById("results").innerHTML = "";


    if (userChoice == "avada-kedavra" || userChoice == "imperio" || userChoice == "crucio") {
        document.getElementById("player").innerHTML = 'You cast' + ' ' + userChoice + '.';
    } else if (userChoice == "rope") {
        document.getElementById("player").innerHTML = 'You chose' + ' ' + userChoice + '. <br />Well aren\'t you a smarty pants.';
    } else {
        document.getElementById("player").innerHTML = "That is not a valid choice, try again.";

        return false;
    }

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "avada-kedavra";
    } else if (computerChoice <= 0.67) {
        computerChoice = "imperio";
    } else {
        computerChoice = "crucio";
    }

    document.getElementById("opponent").innerHTML = '// The computer chose' + ' ' + computerChoice + '.';

    var compare = function (choice1, choice2) {
        if (choice1 == choice2) {
            return "The result is a tie!";
        } else if (choice1 == "avada-kedavra") {
            if (choice2 == "crucio") {
                wins++;
                return "Avada wins.";
            } else {
                loses++;
                return "sorry. Imperio wins.";
            }
        } else if (choice1 == "imperio") {
            if (choice2 == "avada-kedavra") {
                wins++;
                return "Imperio wins";
            } else {
                loses++;
                return "sorry. Crucio win.";
            }
        } else if (choice1 == "crucio") {
            if (choice2 == "avada-kedavra") {
                loses++;
                return "sorry. Avada-Kedavra wins";
            } else {
                wins++;
                return "Crucio win";
            }
        } else if (choice1 == "rope") {
            wins++;
            return "rope FTW";
        } else {
            return "error. bummer dude. game over. no dice.";
        }
    };

    var winner = compare(userChoice, computerChoice);
    document.getElementById("results").innerHTML = winner;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;

    if (wins > 99 || loses > 99) {
        document.getElementById("wins").style.fontSize = "44";
        document.getElementById("loses").style.fontSize = "44";
    }
    if (wins > 999) {
        alert("You reached the max score of 999. <br />Congratulations, you have no life.");
    }
    if (loses > 999) {
        alert("Your opponent reached the max score of 999. <br />We're sorry, you have no life.");
    }
};

var reset = function () {
    loses = 0;
    wins = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
};