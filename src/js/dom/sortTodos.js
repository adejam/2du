import currentStates from '../functions/currentStates';
import projectTodos from '../functions/project/projectTodos';

const sortTodos = () => {
  const sortSelectValue = document.querySelector('#sortSelect').value;
  currentStates.sortSelect = sortSelectValue;
  projectTodos[currentStates.filterSelect][sortSelectValue](currentStates.projectState);
};

export default sortTodos;
