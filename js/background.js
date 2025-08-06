
function drawBackground() {
    // Blue sky background
    background(135, 206, 235);
    
    // TODO: Sun on the right side
    fill(255, 255, 0);
    ellipse(400, 0, 50, 50);

    // Grass at the bottom (100px high)
    fill(34, 139, 34);
    rect(0, 400 - 100, 400, 100);

    // GAME OVER
    if (health <=0) {
        background("black");
        textSize(50);
        fill("#008000");
        text("Game Over!", 50, 200);
        player.visible = false;
        food.visible = false;
        enemy.visible = false;
    } else {
        player.visible = true;
        food.visible = true;
        enemy.visible = true;
    }

}