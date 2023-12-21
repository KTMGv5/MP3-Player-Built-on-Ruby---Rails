// app/assets/javascripts/player.js
document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio();
  const playlist = document.getElementById('playlist');
  const timeDisplay = document.getElementById('time-display');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  playlist.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      const fileName = e.target.innerText;
      audio.src = `/mp3/${fileName}`;
      audio.load();
      audio.play();
    }
  });

  // Update the time display while playing
  audio.addEventListener('timeupdate', function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const remainingMinutes = Math.floor((duration - currentTime) / 60);
    const remainingSeconds = Math.floor((duration - currentTime) % 60);

    timeDisplay.innerText = `${minutes}:${seconds} / ${remainingMinutes}:${remainingSeconds}`;
  });

  // Play button click event
  playButton.addEventListener('click', function () {
    audio.play();
  });

  // Pause button click event
  pauseButton.addEventListener('click', function () {
    audio.pause();
  });
});
