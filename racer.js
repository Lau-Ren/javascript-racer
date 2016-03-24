document.addEventListener('DOMContentLoaded', function() {

var restart= false
var position1 =1
var position2 =1;
var play = document.addEventListener('keyup', updatePlayerPosition);
var lengthOfTrack  = 5 
var strips = document.querySelectorAll('tr')
var player1Strip = document.querySelectorAll('#player1_strip td')
var player2Strip = document.querySelectorAll('#player2_strip td')

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
	// called for every keyup event
	function updatePlayerPosition(){
		// if key up event is z/player 1
		if (event.which === 90) {
			// during race active class is added to table cell player is on, position is incremented by 1
			if (player1Strip[position1].className ===""){
				
				player1Strip[position1].className = "active"
				player1Strip[position1-1].className = ""
				position1 += 1
			// when player reaches the end position is not incremented, given option to play again.
			} else if (player1Strip[position1].className === "finish") {
				
				player1Strip[position1-1].className = ""
				alert("Congratulations Moose, you are the winner! Please enjoy your kale smoothie")
				restart = confirm("play again?")
				// if player doesnt restart game then event listener for key up is removed
				if (restart) {
					restartGame()
				}else {
					play = document.removeEventListener('keyup', updatePlayerPosition);
				}
			}
		// if key up event is m/player 2
		} else if (event.which === 77) {

			if (player2Strip[position2].className ===""){
				
				console.log(player2Strip[position2].className)
				player2Strip[position2].className = "active"
				player2Strip[position2-1].className = ""
				position2 += 1

			} else if (player1Strip[position2].className === "finish") {
				
				console.log(player2Strip[position2].className)
				player2Strip[position2-1].className = ""
				alert("Congratulations Kangaroo, you are the winner! Please enjoy your kale smoothie")
				restart = confirm("play again?")

				if (restart) {
					restartGame()
				}else {
					play = document.removeEventListener('keyup', updatePlayerPosition);
				}
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