
		var $ = function (id){
			return document.getElementById(id);
		}

// all 5 letter words means no need to figuer out length
		var game = ["acorn", "broom", "color", "droid", "enter", "felon", "grill", "horse", "idiot", "jelly", "koala", "laugh", "metal", "novel", "olive", "paper", "quack", "remix", "sandy", "toast", "untie", "video", "wires", "xerox", "yeast", "zeros" ]

		var choice = Math.floor(Math.random()*26);
		// give ym words a number and randomize them
		var answer = game[choice];
		var myLength = answer.length;
		// might not be necessary since all my words are 5 letters long, but wont run without it
		var display = [myLength];
		var win = myLength;
		var letters = answer.split('');
		var attemptsLeft = 10;
		// chances left can be adjusted here
		var output = "";
		var usedLetters ="";
			// consl.log("one")
	var setup = function(){
		for (var i = 0; i< answer.length; i++) {
			// answer[i]{
				// this ^ was just causing issues 

				display[i] = "_ ";
				output = output + display[i];
				// display dashes for letter spots
			}
			document.getElementById("game").innerHTML = output;
			output = ""
		}
	var submit = function(){
		output = "";
		usedLetters = $(letter).value;
		$("letter").value = "";

		for (var c=0; c< answer.length; c++){
			alert(letters[c]);
			if (usedLetters.toLowercase() == letters[c]){

				display[c] = usedLetters.toLowercase();
				win--;
			}
				output = output + display[c] + " ";
		}
	}	
	// getting an error here "camnnot set innerHTML property of null"
	document.getElementById("game").innerHTML = output;
	output = "";
	attemptsLeft--;

	if (win <1){
		document.getElementById("guesses").innerHTML = "You Win";
	}
	else if (attemptsLeft <1) {
		document.getElementById("guesses").innerHTML = "You Lose";
	}
	else {
		document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
	}
// }	
	window.onload = function(){
		setup();
		$("submit").onclick = submit;
	}




	