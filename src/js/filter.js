import getItems from './getitems';
import addItemToUi from './additemtoui';
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

const listToShow = items => {
  items.forEach(item => {
    addItemToUi(item, 'todo', 'add');
  });
};
const filterTodo = ({
  target: {
    classList,
    dataset: { tofilter },
  },
}) => {
  if (classList.contains('filter')) {
    const todos = getItems('todo');

    const filteredArrays = todos.filter(({ selectProject }) => selectProject === tofilter);
    const todoRow = document.querySelector('#todoRow');
    todoRow.querySelectorAll('*').forEach(row => row.remove());
    tofilter === 'all' ? listToShow(todos) : listToShow(filteredArrays);
  }
};

export default filterTodo;
