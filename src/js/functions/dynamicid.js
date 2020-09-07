import database from '../storage/database';

const dynamicId = databaseName => {
  let id;
  if (localStorage.getItem(databaseName) === null) {
    id = 0;
  } else {
    const theLength = localStorage.getItem(databaseName).length;
    if (theLength < 3) {
      id = 0;
    } else {
      const items = database.getItems(databaseName);
      id = items[items.length - 1].id + 1;
    }
  }

  return id;
};

export default dynamicId;
