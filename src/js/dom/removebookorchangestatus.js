import removeFromUi from './removefromui';
import editTodo from './edit';
import undoDelete from './undoDelete';
import changeStatusLogic from '../functions/changeStatusLogic';
import removeBookLogic from '../functions/removeBookLogic';
import currentStates from '../functions/currentStates';
import database from '../storage/database';
import changeStatus from './changestatus';
import restore from './restore';

const removeBookOrChangeStatus = e => {
  e.preventDefault();
  const { target } = e;
  if (target.classList.contains('removeBtn')) {
    const databaseName = target.dataset.databasename;
    const todos = database.getItems(databaseName);
    currentStates.todelete = 'yes';
    const newTodos = removeBookLogic(target.id, todos);
    removeFromUi(target);
    const undo = document.querySelector('.undo');
    undo.classList.remove('d_none');
    undo.addEventListener('click', restore);
    const undoParams = [target, databaseName, newTodos, undo];
    undoDelete(...undoParams);
  } else if (target.classList.contains('changeStatus')) {
    const databaseName = target.dataset.databasename;
    const todos = database.getItems(databaseName);
    const newTodos = changeStatusLogic(todos, target.dataset.identity);
    changeStatus(...newTodos.changeStatusParams);
    database.setItemToDatabase(databaseName, newTodos.todosList);
  } else if (target.classList.contains('edit')) {
    const editTodoForm = document.querySelectorAll('[data-formtype="edit"]');
    editTodoForm.forEach(fom => {
      const id = fom.dataset.databaseid;
      const fomBtn = fom.querySelector(`#editTodo${id}`);
      fomBtn.addEventListener('click', editTodo);
    });
  }
};

export default removeBookOrChangeStatus;
