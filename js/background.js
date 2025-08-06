
function drawBackground() {
    // Blue sky background
    background(135, 206, 235);
    
    // TODO: Sun on the right side
    fill(255, 255, 0);
    ellipse(screenRight, 0, 50, 50);
    if(health < 50){
        fill(255, 83, 73);
        ellipse(0, 0, 50, 50);
    }

    // Grass at the bottom (100px high)
    fill(34, 139, 34);
    rect(0, screenRight - 100, screenRight, 100);    // Game Over
    if(health <=0){
        fill(0, 0, 0);
        textSize(50);
        textAlign(CENTER);
        text("Game Over", width / 2, height / 2);
        health = 0;
        score = 0;
        player.y = 320;
        background("#696969");
        fill(255, 0, 0);
        ellipse(screenRight, 0, 50, 50);
        fill(93, 73, 60);
        rect(0, screenRight - 100, screenRight, 100);
        enemy.velocityX = 0; // Stop enemy movement
        food.velocityX = 0; // Stop food movement
    }
}