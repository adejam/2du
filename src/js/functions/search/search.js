import getItemToSearch from './getItemToSearch';
import listToShow from '../../dom/listToShow';
import database from '../../storage/database';

const search = ({ target: { value } }) => {
  const todos = database.getItems('todo');
  const filteredArrays = getItemToSearch(value, todos);
  listToShow(filteredArrays);
};

export default search;
