$(document).ready(function() {


// buttons (off of bootstrap) to start the game
function beginScreen() {
	startGame = "<p class='text-center main-start-button'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Let's Go!</a></p>";
	$(".beginArea").html(startGame);
}

	beginScreen();

	// / variables to start game
var gameHTML;
var beginScreen;

//variables to track progress/time 
var chosenAnswer;
var theClock;
var counter = 30;


$("body").on("click", ".main-start-button", function(event){
	event.preventDefault(); 
	generateHTML();
	timerClock();

});
	

// selecting an answer & clearing the timer
$("body").on("click", ".answer", function(event){
	chosenAnswer = $(this).text();
    
    if(chosenAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		calculateWin();
		timerClock();
    }
    
	else {
		clearInterval(theClock);
		calculateLoss();
	}
});

// reset game button 
$("body").on("click", ".reset-button", function(event){
	resetGame();
	preventDefault();
	
}); 


});  

// variables set to zero; count
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var counter = 0;
var questionCounter = 0;

function timerClock() {
	theClock = setInterval(thirtySeconds, 6000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			lossTimedOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}}

// Arrays
var questions = ["Why was the stadium so cold?", "What do you call the security at a Samsung store?", "Why doesn't Pac Man have a Twitter?", "Why do the French eat snails?"];
var answers = [["Because there were a lot of fans.", "I wasn't feeling well.", "Because it's Colorado weather.", "Go Broncos!"], ["Paul Blart","The Guardians of the Galaxy","Segway Bros","What security?"], ["It became a political platform and he is a known libertarian.", "POTUS tweets became an over-arching theme.", "He didn't want anyone following him.", "He never got retweeted."], ["It's actually pretty good! #tastesLikeChicken","Snailed it!","They don't like fast food.","Escargot away if you don't like snails"]]; 
var images = ["<img class='center-block img-right' src='images/wozniak.png'>", "<img class='center-block img-right' src='images/stevecarrell.png'>", "<img class='center-block img-right' src='images/phildunphy.png'>", "<img class='center-block img-right' src='images/chevychase.png'>", "<img class='center-block img-right' src='images/michaelscott.png'>", "<img class='center-block img-right' src='images/convertible.png'>", "<img class='center-block img-right' src='images/dryerase.png'>", "<img class='center-block img-right' src='iamges/fidgetspinner.png'>"];
var correctAnswers = ["A. Because there were a lot of fans.", "B. The Guardians of the Galaxy", "C. He didn't want anyone following him.", "C. They don't like fast food.", "D. Lettuce Turnip the Beet!", "A. No, but April May.", "B. Bison",];


function lossTimedOut() {
	unanswered++;
	gameHTML = "<p class='text-center timer-p'>Countdown: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='images/obama.png'>";
	$(".beginArea").html(gameHTML);
	setTimeout(pause, 6000);  
	timerClock();
}


function calculateWin() {
	correctAnswers++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + images[questionCounter];
	$(".beginArea").html(gameHTML);
	timerClock();
	setTimeout(pause, 8000);  
}

function calculateLoss() {
	incorrectAnswers++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='images/wrong.png'>";
	$(".beginArea").html(gameHTML);
	timerClock();
    setTimeout(pause, 4000); 
}   

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>"+questions[questionCounter] + "</p><p class='first-answer answer'>A. "+answers[questionCounter][0] + "</p><p class='answer'>B. "+answers[questionCounter][1]+"</p><p class='answer'>C. "+answers[questionCounter][2]+"</p><p class='answer'>D. "+answers[questionCounter][3]+"</p>";
	$(".beginArea").html(gameHTML);
	timerClock();
}

function pause() {
	if (questionCounter < 4) {    
	questionCounter++;
	generateHTML();
	counter = 30;
    }
    
	else {
        generateHTML();
        event.preventDefault();	
    }    
}

