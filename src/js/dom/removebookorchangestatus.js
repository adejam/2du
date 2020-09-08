import removeFromUi from './removefromui';
import editTodo from './edit';
import undoDelete from './undoDelete';
import changeStatusLogic from '../functions/changeStatusLogic';
import removeBookLogic from '../functions/removeBookLogic';
import currentStates from '../functions/currentStates';
import database from '../storage/database';
import changeStatus from './changestatus';

const removeBookOrChangeStatus = e => {
  e.preventDefault();
  const { target } = e;
  if (target.classList.contains('removeBtn')) {
    const databaseName = target.dataset.databasename;
    const todos = database.getItems(databaseName);
    currentStates.todelete = 'yes';
    const id = parseInt(target.id, 10);
    const newTodos = removeBookLogic(id, todos);
    removeFromUi(target);
    undoDelete(target, databaseName, newTodos.todos);
  } else if (target.classList.contains('changeStatus')) {
    const id = parseInt(target.dataset.identity, 10);
    const databaseName = target.dataset.databasename;
    const todos = database.getItems(databaseName);
    const newTodos = changeStatusLogic(todos, id);
    changeStatus(...newTodos.changeStatusParams);
    database.setItemToDatabase(databaseName, newTodos.todos);
  } else if (target.classList.contains('edit')) {
    const editTodoForm = document.querySelectorAll('[data-formtype="edit"]');
    editTodoForm.forEach(fom => {
      const id = parseInt(fom.dataset.databaseid, 10);
      const fomBtn = fom.querySelector(`#editTodo${id}`);
      fomBtn.addEventListener('click', editTodo);
    });
  }
};

export default removeBookOrChangeStatus;
