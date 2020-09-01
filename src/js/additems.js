import getItems from './getitems';

const addItem = (item, databaseName) => {
  const items = getItems(databaseName);
  items.push(item);
  localStorage.setItem(databaseName, JSON.stringify(items));
};

export default addItem;
