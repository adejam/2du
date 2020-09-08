import database from '../storage/database';

const currentStates = {
  currentTodos: database.getItems('todo'),
  filterState: [],
  sortState: [],
  projectState: 'all',
  filterSelect: 'all',
  sortSelect: 'oldToNew',
  todelete: 'no',
};

export default currentStates;
