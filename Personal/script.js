var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function updateProject(imagePath, descriptionText, linkUrl) {
  console.log("Updating project:", imagePath, descriptionText, linkUrl);
  document.getElementById("gameImage").src = imagePath;
  document.getElementById("imageDescription").textContent = descriptionText;
  document.getElementById("projectLink").href = linkUrl;
}

function changeImage(newPath) {
  document.getElementById("gameImage").src = newPath;
}


const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];

formElement.addEventListener('submit', function(e) {
    e.preventDefault();

    feedbackElement.innerHTML = 'Hello ' + formElement.user_name.value + '! Thank you for your message. We will get back with you as soon as possible!';
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');

    // 👇 Add this to hide the feedback after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        feedbackElement.style.display = "none";
        document.body.classList.toggle('moveDown'); // Optional: remove the moveDown class if needed
    }, 5000);
});
    
