import getItems from './getitems';
import setItemToDatabase from './setItem';

const addItem = (item, databaseName) => {
  const items = getItems(databaseName);
  items.push(item);
  setItemToDatabase(databaseName, items);
};

export default addItem;
