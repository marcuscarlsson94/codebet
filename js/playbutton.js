var playBtn = document.getElementById("playBtn");
// Event listener for the play/pause button
playBtn.addEventListener("click", function () {
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playBtn.innerHTML = "Pause";
    } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playBtn.innerHTML = "Play";
    }
});