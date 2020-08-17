function changeStatus(trueStatement, id) {
  const statusButton = document.querySelector(`#statusButton${id}`);
  if (trueStatement === true) {
    statusButton.classList.add('btn-success');
    statusButton.classList.remove('btn-outline-success');
  } else {
    statusButton.classList.add('btn-outline-success');
    statusButton.classList.remove('btn-success');
  }
}

export default changeStatus;
