// Affiche la modale de contact
function displayModal() {
    const background = document.getElementById("modal_bg");
	background.style.display = "block";
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.getElementById("closemd").focus();
    document.getElementById("send").addEventListener("keydown", (e) => {
        console.log(e.key)
        if (e.key === "Tab"){
            console.log("test")
            document.getElementById("closemd").focus()
        }
    })
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal()
        }
    })
}

// Ferme la modale de contact
function closeModal() {
    const background = document.getElementById("modal_bg");
    background.style.display = "none";
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Envoi la modale de contact
function sendModal (e) {
    e.preventDefault()
    const background = document.getElementById("modal_bg");
    background.style.display = "none";
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    console.log(inputFirstname.value)
    console.log(inputLastname.value)
    console.log(inputEmail.value)
    console.log(inputMessage.value)
  }

