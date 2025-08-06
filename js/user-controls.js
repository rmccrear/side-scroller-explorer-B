
function respondToUser() {
  
  // TODO: if player is back to position
  // stop them
   if (player.y>320){
    player.velocityY = 0;   
   }
  // Player jumping controls
  if (keyWent Down("SPACE")) {
    player.velocityY = -4;
    player.addAnimation('player', jumpingAnimation);
  } 
  
   
  // Set velocityY to 4 when player reaches y=100
  if (player.y <= 100) {
    player.velocityY = 4;
  }
}