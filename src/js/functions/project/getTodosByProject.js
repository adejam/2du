import database from '../../storage/database';

const getTodosByProject = tofilter => {
  const todos = database.getItems('todo');
  const filteredArrays = todos.filter(({ selectProject }) => selectProject === tofilter);
  return tofilter === 'all' ? todos : filteredArrays;
};

export default getTodosByProject;
