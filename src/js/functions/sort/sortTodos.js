import currentStates from '../currentStates';
import projectTodos from '../project/projectTodos';

const sortTodos = () => {
  const sortSelectValue = document.querySelector('#sortSelect').value;
  currentStates.sortSelect = sortSelectValue;
  projectTodos[currentStates.filterSelect][sortSelectValue](currentStates.projectState);
};

export default sortTodos;
