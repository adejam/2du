import getItems from '../storage/getitems';

const filterTodo = tofilter => {
  const todos = getItems('todo');
  const filteredArrays = todos.filter(({ selectProject }) => selectProject === tofilter);
  return tofilter === 'all' ? todos : filteredArrays;
};

export default filterTodo;
