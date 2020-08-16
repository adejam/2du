import getItems from './getitems';
function addItem(item, databaseName) {
  const items = getItems(databaseName);
  items.push(item);
  localStorage.setItem(databaseName, JSON.stringify(items));
}

export default addItem;