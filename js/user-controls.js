
function respondToUser() {
  
  // TODO: if player is back to position
  // stop them
   if (player.y>320){
    player.velocityY = 0;
    player.addAnimation('player', playerAnimation);   
   }
  // Player jumping controls
  //changed playerVelocityY into a counter pattern
  if (keyWentDown("SPACE")) {
    player.velocityY = - 7;
    player.addAnimation('player', jumpingAnimation);
  } 
  
   
  // Set velocityY to 4 when player reaches y=100
  //changed playerVelocityY into a counter pattern
  if (player.y <= 100) {
    player.velocityY = player.velocityY +2;
  }
}