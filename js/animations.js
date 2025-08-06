var foodAnimation;
var playerAnimation;
var enemyAnimation;
var jumpingAnimation
function setupAnimations(){
  // Load sprite animations
  foodAnimation = loadSpriteSheet("sprites/fly.png", 64, 45, 2);
  playerAnimation = loadAnimation("sprites/zombie-1.png");
  jumpingAnimation = loadAnimation("sprites/zombie-jump.png");
  enemyAnimation = loadAnimation("sprites/mushroom.png");
}