import getItems from '../storage/getitems';
import setItemToDatabase from '../storage/setItem';

const addItem = (item, databaseName) => {
  const items = getItems(databaseName);
  items.push(item);
  setItemToDatabase(databaseName, items);
};

export default addItem;
