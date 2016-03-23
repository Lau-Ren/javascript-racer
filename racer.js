document.addEventListener('DOMContentLoaded', function() {


var restart= false
var position1 =1
var position2 =1;


var play = document.addEventListener('keyup', updatePlayerPosition);

var lengthOfTrack = prompt("length of race course?") 
var strips = document.querySelectorAll('tr')


// for the number of strips
for (var j = 0; j < strips.length; j++) { 
	console.log("j")

// for the number of squares the length should be	
	for ( var k = 0; k < lengthOfTrack; k++){
		var square = document.createElement('td')
		
		strips[j].appendChild(square)
			console.log("k")
		}
		square.className = "finish"

	}

	var player1Strip = document.querySelectorAll('#player1_strip td')
var player2Strip = document.querySelectorAll('#player2_strip td')



	function updatePlayerPosition(){

		if (event.which === 90) {

			if (player1Strip[position1].className ===""){
				
				console.log(player1Strip[position1].className)
				player1Strip[position1].className = "active"
				player1Strip[position1-1].className = ""
				position1 += 1

			} else if (player1Strip[position1].className === "finish") {
				
				console.log(player1Strip[position1].className)
				player1Strip[position1-1].className = ""
				alert("congratulations Player 1, you are the winner!")
				restart = confirm("play again?")

				if (restart) {
					restartGame()
				}else {
					play = document.removeEventListener('keyup', updatePlayerPosition);
				}
			}

		} else if (event.which === 77) {

			if (player2Strip[position2].className ===""){
				
				console.log(player2Strip[position2].className)
				player2Strip[position2].className = "active"
				player2Strip[position2-1].className = ""
				position2 += 1

			} else if (player1Strip[position2].className === "finish") {
				
				console.log(player2Strip[position2].className)
				player2Strip[position2-1].className = ""
				alert("congratulations Player 2, you are the winner!")
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
		position1 =1
		position2 =1

		for (var i = 1; i < player1Strip.length -1; i++ ){
		player1Strip[i].className = ""
		player2Strip[i].className = ""	
		player1Strip[0].className = "active"	
		player2Strip[0].className = "active"	

		restart = false
		};
	

	}

})