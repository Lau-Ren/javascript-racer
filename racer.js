document.addEventListener('DOMContentLoaded', function() {
var restart= false
var position1 =1
var position2 =1;
var player1Strip = document.querySelectorAll('#player1_strip td')
var player2Strip = document.querySelectorAll('#player2_strip td')
var play = document.addEventListener('keyup', updatePlayerPosition);

	function updatePlayerPosition(){

		if (event.which === 90) {
			if (player1Strip[position1].className ===""){
				console.log(player1Strip[position1].className)
				player1Strip[position1].className = "active"
				player1Strip[position1-1].className = ""
				position1 += 1
			} else if (player1Strip[position1].className === "finish") {
				console.log(player1Strip[position1].className)
				// player1Strip[position1].className = "active"
				player1Strip[position1-1].className = ""
				alert("congratulations Player 1, you are the winner!")
				restart = confirm("play again?")
				if (restart) {
					restartGame()

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
				// player1Strip[position1].className = "active"
				player2Strip[position2-1].className = ""
				alert("congratulations Player 2, you are the winner!")
				restart = confirm("play again?")
				if (restart) {
					restartGame()

				}
			}
		}


	}


	function restartGame() {
		position1 =1
		position2 =1

		for (var i = 1; i < player1Strip.length; i++ ){
		player1Strip[position1].className = ""
		player2Strip[position2].className = ""	
		player1Strip[0].className = "active"	
		player2Strip[0].className = "active"	
		restart = false
		}


	}

})