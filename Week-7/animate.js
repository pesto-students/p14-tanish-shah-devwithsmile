let imgX = 0;
let imgY = 0;
let timerId = null;

function startAnimation(clickX, clickY) {
    // Stop the current animation timer if it exists
    if (timerId !== null) {
        clearInterval(timerId);
    }

    // Set up a new timer to call moveImage every 10 milliseconds
    timerId = setInterval(() => {
        moveImage(clickX, clickY);
    }, 10);
}

function moveImage(targetX, targetY) {
    // Calculate the distance to move in both X and Y directions
    const deltaX = targetX - imgX;
    const deltaY = targetY - imgY;

    // Move 1 pixel in the direction of the target
    imgX += deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;
    imgY += deltaY > 0 ? 1 : deltaY < 0 ? -1 : 0;

    // Update the image position
    document.getElementById('heart').style.left = imgX + 'px';
    document.getElementById('heart').style.top = imgY + 'px';

    // Check if the image has reached the target position
    if (imgX === targetX && imgY === targetY) {
        // Stop the current animation timer
        clearInterval(timerId);

        // Reset timerId to null
        timerId = null;
    }
}

// Attach the startAnimation function to the click event of the document
document.addEventListener('click', (event) => {
    // Call startAnimation with the clicked (x, y) coordinate
    startAnimation(event.clientX, event.clientY);
});