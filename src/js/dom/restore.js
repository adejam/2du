import projectTodos from '../functions/project/projectTodos';
import currentStates from '../functions/currentStates';

const restore = () => {
  const undo = document.querySelector('.undo');
  undo.classList.add('d_none');
  currentStates.todelete = 'no';
  projectTodos[currentStates.filterSelect][currentStates.sortSelect](currentStates.projectState);
};

export default restore;
