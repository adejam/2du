import getItems from '../storage/getitems';
import listToShow from '../dom/listToShow';
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

const filterTodo = ({
  target: {
    classList,
    dataset: { tofilter },
  },
}) => {
  if (classList.contains('filter')) {
    const todos = getItems('todo');
    const filteredArrays = todos.filter(({ selectProject }) => selectProject === tofilter);
    tofilter === 'all' ? listToShow(todos) : listToShow(filteredArrays);
  }
};

export default filterTodo;
