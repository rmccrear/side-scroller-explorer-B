
function doSpriteMovement() {
    // Food movement - moves from right to left and repeats
    // Food movement - moves randomly between 100 and 300 on the y axis
    if(food.x < 0) {
        food.x = screenRight;
        food.y = randomNumber(100,300); 
        food.velocityX = randomNumber(-1,-4);
    }
    
    // Enemy movement - moves from right to left and repeats
    // Enemy movement - speeds up or slows down with a random number
    if(enemy.x < 0) {
        enemy.x = randomNumber(screenRight,screenRight+100);
        enemy.velocityX = randomNumber(-4,-7);
    }
}