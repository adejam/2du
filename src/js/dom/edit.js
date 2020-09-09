import closeModal from './closemodal';
import editLogic from '../functions/editLogic';
import database from '../storage/database';
import addItemToUi from './additemtoui';

const editTodo = e => {
  e.preventDefault();
  const form = e.target.parentElement.parentElement;
  const databaseName = form.dataset.databasename;
  const formType = form.dataset.formtype;
  const id = parseInt(form.dataset.databaseid, 10);
  const values = form.querySelectorAll('.values');
  const todos = database.getItems(databaseName);
  const newTodos = editLogic(values, id, todos);
  addItemToUi(newTodos.todo)[databaseName][formType]();
  database.setItemToDatabase(databaseName, newTodos.todosList);
  closeModal(form);
};

export default editTodo;
