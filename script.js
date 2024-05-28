// Open the modal
function openModal(element) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = element.src;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
