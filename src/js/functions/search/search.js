import getItemToSearch from './getItemToSearch';
import listToShow from '../../dom/listToShow';

const search = ({ target: { value } }) => {
  const filteredArrays = getItemToSearch(value);
  listToShow(filteredArrays);
};

export default search;
