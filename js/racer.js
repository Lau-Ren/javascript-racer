document.addEventListener('DOMContentLoaded', function() {

var restart= false
var position
var position1 =1
var position2 =1;
var play = document.addEventListener('keyup', selectPlayer);
var lengthOfTrack  = 5 
var strips = document.querySelectorAll('tr')
var playerStrip

lengthOfTrack = prompt("length of race course?") 
	// create length of racecourse:
	// loops for the number of player strips
	for (var j = 0; j < strips.length; j++) { 
		// loop for the number length of course	
		for ( var k = 0; k < lengthOfTrack; k++){
			var square = document.createElement('td')
			strips[j].appendChild(square)
		}
		// sets last cell in array as the finish line
		square.className = "finish"
	}

	restartGame()
	// move player 1 position every keyup event
	// check which key 

	function selectPlayer(){
		var player 
		if (event.which === 90) {
			playerStrip= document.querySelectorAll('#player1_strip td')
			position = position1
		// if key up event is m/player 2
		} else if (event.which === 77) {
			playerStrip = document.querySelectorAll('#player2_strip td')
			position = position2
		}
		updatePlayerPosition(playerStrip, position)
	}

	function updatePlayerPosition(strip, position){
		
		// add active class to current cell, remove active class from previous cell.
		// position is incremented by 1
		if (strip[position].className ===""){
			
			strip[position].className = "active"
			strip[position-1].className = ""
			position += 1
			if (event.which ===90){
				position1 = position
				playerAnimal = "moose"
			} else if (event.which ===77){
				position2 = position
				playerAnimal = "kangaroo"
			}
		// when player reaches the end position is not incremented, given option to play again.
		} else if (strip[position].className === "finish") {
			
			strip[position-1].className = ""
			alert("Congratulations " + playerAnimal + ", you are the winner! Please enjoy your kale smoothie")
			restart = confirm("play again?")
			// if player doesnt restart game then event listener for key up is removed
			if (restart) {
				restartGame()
			}else {
				play = document.removeEventListener('keyup', updatePlayerPosition);
			}
		}
	}

	function restartGame() {
		
		player1Strip = document.querySelectorAll('#player1_strip td')
		player2Strip = document.querySelectorAll('#player2_strip td')
		// resets next position to be cell following start cell
		position1 =1
		position2 =1
		// removes class names from all cells and sets first cell as start position 
		for (var i = 1; i < player1Strip.length -1; i++ ){
		player1Strip[i].className = ""
		player2Strip[i].className = ""	
		player1Strip[0].className = "active"	
		player2Strip[0].className = "active"	

		restart = false
		};


	}

})