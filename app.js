var loses = 0;
var wins = 0;

var play = function (userChoice) {

    document.getElementById("player").innerHTML = "";
    document.getElementById("opponent").innerHTML = "";


    if (userChoice == "avada-kedavra" || userChoice == "imperio" || userChoice == "crucio") {
        document.getElementById("player").innerHTML = 'You cast' + ' ' + userChoice + '.';
    
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

    document.getElementById("opponent").innerHTML = 'The computer chose' + ' ' + computerChoice + '.';

    var compare = function (choice1, choice2) {
        if (choice1 == choice2) {

        } else if (choice1 == "avada-kedavra") {
            if (choice2 == "crucio") {
                wins++;

            } else {
                loses++;

            }
        } else if (choice1 == "imperio") {
            if (choice2 == "avada-kedavra") {
                wins++;

            } else {
                loses++;

            }
        } else if (choice1 == "crucio") {
            if (choice2 == "avada-kedavra") {
                loses++;

            } else {
                wins++;

            }

        } else {
            return "error. bummer dude. game over. no dice.";
        }
    };

    var winner = compare(userChoice, computerChoice);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;

    if (wins >= 50) {
        alert("You reached the max score of 50. Congratulations, you're officially a wizard.");
    }
    if (loses >= 50) {
        alert("Your opponent reached the max score of 50. We're sorry, you might be a Muggle.");
    }
};

var reset = function () {
    loses = 0;
    wins = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
};



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}