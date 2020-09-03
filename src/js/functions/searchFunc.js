import getItems from '../storage/getitems';

const searchFunc = value => {
  const searchKey = value.toLowerCase();
  const todos = getItems('todo');
  return todos.filter(({ title }) => title.toLowerCase().indexOf(searchKey) !== -1);
};

export default searchFunc;
