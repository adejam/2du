import database from '../../storage/database';

const getItemToSearch = value => {
  const searchKey = value.toLowerCase();
  const todos = database.getItems('todo');
  return todos.filter(({ title }) => title.toLowerCase().indexOf(searchKey) !== -1);
};

export default getItemToSearch;
