
function doSpriteInteraction() {
    // Check if player touches food
    if (player.isTouching(food)) {
        score = score + 10; // Add 10 points
        food.x = screenRight; // Send food back to start (right edge)
    }

    if (enemy.isTouching(player)) {
        enemy.rotation = 25;
        health = health - 1; // Decrease health by 1
    } else {enemy.rotation = 0}
}