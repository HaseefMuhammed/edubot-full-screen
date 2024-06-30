function enterFullscreen() {
  const iframe = document.getElementById('fullscreen-iframe');
  
  // Attempt to enter full screen within the iframe
  if (iframe.requestFullscreen) {
      iframe.requestFullscreen().then(hideButton).catch(handleError);
  } else if (iframe.mozRequestFullScreen) { // Firefox
      iframe.mozRequestFullScreen();
      hideButton();
  } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      iframe.webkitRequestFullscreen();
      hideButton();
  } else if (iframe.msRequestFullscreen) { // IE/Edge
      iframe.msRequestFullscreen();
      hideButton();
  } else {
      alert("Your browser does not support fullscreen API.");
  }
}

// Function to hide the button
function hideButton() {
  document.getElementById('fullscreen-btn').style.display = 'none';
  document.getElementById('iframe-container').style.display = 'block';
}

// Function to handle fullscreen errors
function handleError(error) {
  console.error("Error attempting to enable full-screen mode:", error);
  alert("Failed to enter full-screen mode.");
}

function loginAdmin(){
  let username = document.getElementById("inputUserName").value;
  let password = document.getElementById("inputPassword").value;

  if(username == "edubot" && password == "openapp.eb"){
      window.location.href = "orgin.html";
  }else{
      alert("Invalid username or password");
  }
}
