$(document).ready(function(){

	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["yes", "no", "idk", "yassss!", "probs not", "I pity da fool", "for sure", "ask your mom", "ask again later", "dont ask again"];

magic8Ball.askQuestion = function(question) {
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#8ball").effect( "shake" );
$("#answer").fadeIn(4000);

var randomNumber = Math.random();

var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

var randomIndex = Math.floor(randomNumberForListOfAnswers);

var answer =  this.listOfAnswers[randomIndex];

	$("#answer").text( answer );

	console.log(question);

	console.log(answer);
};
	var onClick = function()
{
	setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);
};

$("#questionButton").click( onClick );
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


});
