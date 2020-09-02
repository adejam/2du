import getItems from './getitems';
import closeModal from './closemodal';
import setItemToDatabase from './setItem';
import editLogic from './editLogic';

const editTodo = e => {
  e.preventDefault();
  const form = e.target.parentElement.parentElement;
  const databaseName = form.dataset.databasename;
  const formType = form.dataset.formtype;
  let items = getItems(databaseName);
  const id = parseInt(form.dataset.databaseid, 10);
  const values = form.querySelectorAll('.values');
  editLogic(items, values, id, databaseName, formType);
  closeModal(form);
   setItemToDatabase(databaseName, items);
};

export default editTodo;
