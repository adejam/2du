import getItems from './getitems';
import removeFromUi from './removefromui';
// import changeStatus from './changestatus';
import editTodo from './edit';
import setItemToDatabase from './setItem';
import changeStatusLogic from './changeStatusLogic';

const removeBookOrChangeStatus = e => {
  e.preventDefault();
  const { target } = e;
  if (target.classList.contains('removeBtn')) {
    const databaseName = target.dataset.databasename;
    const items = getItems(databaseName);
    let index = -1;
    const id = parseInt(target.id, 10);
    for (let i = 0; i < items.length; i += 1) {
      index += 1;
      if (items[i].id === id) {
        items.splice(index, 1);
        break;
      }
    }
   setItemToDatabase(databaseName, items);
    removeFromUi(target);
  } else if (target.classList.contains('changeStatus')) {
    const id = parseInt(target.dataset.identity, 10);
    const databaseName = target.dataset.databasename;
    const items = getItems(databaseName);
    changeStatusLogic (items, id);
    console.log(items);
    setItemToDatabase(databaseName, items);
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
