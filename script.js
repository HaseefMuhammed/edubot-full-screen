function enterFullscreen() {
  const iframe = document.getElementById('fullscreen-iframe');
  
  // Change the iframe source to the desired website
  iframe.src = "https://haseefmuhammed.github.io/rhm-vote-server/start.html";

  // Attempt to enter full screen within the iframe
  if (iframe.requestFullscreen) {
      iframe.requestFullscreen().then(hideButton);
  } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
      hideButton();
  } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen().then(hideButton);
  } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
      hideButton();
  }
}

// Function to hide the button
function hideButton() {
  document.getElementById('fullscreen-btn').style.display = 'none';
  document.getElementById('iframe-container').style.display = 'block';
}