import database from '../storage/database';

const currentStates = {
  currentTodos: database.getItems('todo'),
  deleteState: [],
  filterState: [],
  sortState: [],
  projectState: 'all',
  filterSelect: 'all',
  sortSelect: 'oldToNew',
};

export default currentStates;
