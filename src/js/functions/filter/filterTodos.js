import currentStates from '../currentStates';
import projectTodos from '../project/projectTodos';

const filterTodos = id => {
  currentStates.filterSelect = id;
  projectTodos[id][currentStates.sortSelect](currentStates.projectState);
};

export default filterTodos;
