document.addEventListener('DOMContentLoaded', function() {
  console.log("document ready")


var position1 =1
var position2 =1;
var player1Strip = document.querySelectorAll('#player1_strip td')
var player2Strip = document.querySelectorAll('#player2_strip td')
document.addEventListener('keyup', updatePlayerPosition);





function updatePlayerPosition(player){

if (event.which === 90) {
	
	console.log(event.which)
	player1Strip[position1].className = "active"
	position1 += 1

} else if (event.which === 77) {

	
	player2Strip[position2].className = "active"
	position2 += 1
}




// for (var i = 1; i < player.length; i++) {
// 	if 	(player[i].className === "active") {
// 	player[i].className = ""


// 	} else {
// player[i].className += "active"

// 	}



// break

// }


}

})