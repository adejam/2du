function closeModal(targetElement) {
  const modal = targetElement.parentElement.parentElement.parentElement;
  modal.style.display = 'none';
  const body = document.querySelector('body');
  body.classList.remove('modal-open');
  body.style.paddingRight = '0px';
  const modalBackdrop = document.querySelector('.modal-backdrop');
  modalBackdrop.remove();
}

export default closeModal;
