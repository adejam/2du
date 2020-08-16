import getItems from './getitems';
function dynamicId(databaseName) {
  let id;
  if (localStorage.getItem(databaseName) === null) {
    id = 0;
  } else {
    const items = getItems(databaseName);
    id = items[items.length - 1].id + 1;
  }

  return id;
}

export default dynamicId;