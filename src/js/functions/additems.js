import database from '../storage/database';

const addItem = (item, databaseName) => {
  const items = database.getItems(databaseName);
  items.push(item);
  database.setItemToDatabase(databaseName, items);
};

export default addItem;
