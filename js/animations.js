var foodAnimation;
var playerAnimation;
var enemyAnimation;

function setupAnimations(){
  // Load sprite animations
  foodAnimation = loadSpriteSheet("sprites/fly.png", 64, 45, 2);
  playerAnimation = loadAnimation("sprites/zombie-1.png");
  enemyAnimation = loadAnimation("sprites/mushroom.png");
}