// When the user clicks on the button, open the modal
function showModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function contact(name) {
    var message = `<h1>Okay! Contacted ${name}. Please wait for a response.<\h1>`
    if (name === "Gritty") {
      message = '<img src="./img/gritty_party.gif" alt="Gritty!" style="width:100%">';  
    }
    document.getElementById('modal-content').innerHTML = message;
    showModal();
  }