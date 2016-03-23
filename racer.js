document.addEventListener('DOMContentLoaded', function() {
  console.log("document ready")



var player1Strip = document.querySelectorAll('#player1_strip td')
var player2Strip = document.querySelectorAll('#player2_strip td')
document.addEventListener('keyup', updatePlayerPosition);





function updatePlayerPosition(player){

if (event.which === 90) {
	console.log(event.which)
	var player = player1Strip 

} else if (event.which === 77) {
	var player = player2Strip
}

for (var i = 1; i < player.length; i++) {
	if 	(player[i].className === "active") {
	player[i].className = ""


	} else {
player[i].className += "active"
		
	}



break

}


}

})