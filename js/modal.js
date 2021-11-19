(() => {
  const refs = {
    openModalBtn: document.getElementById('data-modal-open'),
    closeModalBtn: document.getElementById('data-modal-close'),
    modal: document.getElementById('data-modal')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();