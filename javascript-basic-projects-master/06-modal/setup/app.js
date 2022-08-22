const openBtn = document.querySelector(".btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const openModal = () => {
  modalOverlay.classList.add("open-modal");
};

const closeModal = () => {
  modalOverlay.classList.remove("open-modal");
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
