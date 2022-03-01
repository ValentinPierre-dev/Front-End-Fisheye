function displayModal() {
    const background = document.getElementById("modal_bg");
	background.style.display = "block";
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const background = document.getElementById("modal_bg");
    background.style.display = "none";
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function sendModal () {
    const background = document.getElementById("modal_bg");
    background.style.display = "none";
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    console.log(inputFirstname.value)
    console.log(inputLastname.value)
    console.log(inputEmail.value)
    console.log(inputMessage.value)
  }
