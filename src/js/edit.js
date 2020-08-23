import getItems from './getitems';
import closeModal from './closemodal';
import addItemToUi from './additemtoui';

const editTodo = e => {
  e.preventDefault();
  const form = e.target.parentElement.parentElement;
  const databaseName = form.dataset.databasename;
  const formType = form.dataset.formtype;
  const items = getItems(databaseName);

  const id = parseInt(form.dataset.databaseid, 10);
  const values = form.querySelectorAll('.values');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].id === id) {
      values.forEach(({ dataset: { databasekey }, value }) => {
        items[i][databasekey] = value;
      });
      addItemToUi(items[i], databaseName, formType);
      break;
    }
  }
  closeModal(form);
  localStorage.setItem(databaseName, JSON.stringify(items));
};

export default editTodo;
