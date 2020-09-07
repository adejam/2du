import removeFromUi from './removefromui';
import editTodo from './edit';
import changeStatusLogic from '../functions/changeStatusLogic';
import removeBookLogic from '../functions/removeBookLogic';
import database from '../storage/database';
import changeStatus from './changestatus';

const removeBookOrChangeStatus = e => {
  e.preventDefault();
  const { target } = e;
  if (target.classList.contains('removeBtn')) {
    const databaseName = target.dataset.databasename;
    const todos = database.getItems(databaseName);
    const id = parseInt(target.id, 10);
    const newTodos = removeBookLogic(id, todos);
    removeFromUi(target);
    // then i create a settimer function
    // then i'll show the undo button
    // then i'll add a click event to it
    // if click event not fired before timer runs out then setItemToDatabase
    // else if cllck event is fired then reshow the deleted item;
    //     setTimeout(() => {
    //   const millis = Date.now() - start;

    //   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    //   // expected output: seconds elapsed = 2
    // }, 2000);
    database.setItemToDatabase(databaseName, newTodos.todos);
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
