function displayUpload() {
  const upload = document.getElementById("file-upload");
  if (upload.classList.contains("hidden")) {
    upload.classList.remove("hidden");
  } else {
    upload.classList.add("hidden");
  }
}

// Function to close the modal dialog
function toggleModal() {
  const modal = document.getElementById("changesModal");
  // give it the 'hidden' class
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    
  } else {
    modal.classList.add("hidden");
  }
}

function togglePreview(filename) {
  const video = document.getElementById(`preview-${filename}`)
  if (video.classList.contains("hidden")) {
    video.classList.remove("hidden")
  } else {
    video.classList.add("hidden")
  }


}


function ConfirmRemoval() {
  const removal = document.getElementById("removal-container");
  if (removal.classList.contains("hidden")) {
    removal.classList.remove("hidden");
  } else {
    removal.classList.add("hidden");
  }
}
