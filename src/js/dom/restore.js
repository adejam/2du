import projectTodos from '../functions/project/projectTodos';
import currentStates from '../functions/currentStates';
import database from '../storage/database';

const restore = () => {
  const undo = document.querySelector('.undo');
  undo.classList.add('d_none');
  database.setItemToDatabase('todo', currentStates.deleteState);
  projectTodos[currentStates.filterSelect][currentStates.sortSelect](currentStates.projectState);
};

export default restore;
