
function drawBackground() {
    // Blue sky background
    background(135, 206, 235);
    
    // TODO: Sun on the right side
    fill(255, 255, 0);
    ellipse(400, 0, 50, 50);
    if(health < 50){
        fill(255, 83, 73);
        ellipse(0, 0, 50, 50);
    }

    // Grass at the bottom (100px high)
    fill(34, 139, 34);
    rect(0, 400 - 100, 400, 100);
}