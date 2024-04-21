// fullscreen.js

// Function to request fullscreen
function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

// Get the canvas element by its ID
const canvas = document.getElementById('canvas');

// Add a click event listener to the canvas to trigger fullscreen
canvas.addEventListener('click', () => {
    requestFullscreen(canvas);
});
