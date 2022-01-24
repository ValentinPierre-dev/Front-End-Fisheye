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
