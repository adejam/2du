/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

const changeStatusAction = (statusButton, toAdd, toRemove) => {
  statusButton.classList.add(toAdd);
  statusButton.classList.remove(toRemove);
};

const changeStatus = (trueStatement, id) => {
  const statusButton = document.querySelector(`#statusButton${id}`);
  trueStatement === true
    ? changeStatusAction(statusButton, 'btn-success', 'btn-outline-success')
    : changeStatusAction(statusButton, 'btn-outline-success', 'btn-success');
};

export default changeStatus;
