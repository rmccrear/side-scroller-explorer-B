
function setupSprites() {
  // Initialize score
  score = 0;
  health = 100; // Initialize health
  
  // Create food sprite - moving from right to left
  food = createSprite(screenRight, 150, 30, 30);
  food.addAnimation('food', foodAnimation);
  food.velocityX = -1;
  food.velocityY = 0;
  
  // Create player sprite
  player = createSprite(screenRight/2, 320, 40, 40);
  player.addAnimation('player', playerAnimation);
    
  // Create enemy sprite - moving from right to left
  enemy = createSprite(screenRight, 320, 35, 35);
  enemy.addAnimation('enemy', enemyAnimation);
  enemy.velocityX = -5;
  enemy.velocityY = 0;
}