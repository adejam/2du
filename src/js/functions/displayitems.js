import addItemToUi from '../dom/additemtoui';
import database from '../storage/database';

const displayItems = databaseName => {
  const items = database.getItems(databaseName);
  items.forEach(item => addItemToUi(item)[databaseName].add());
};

export default displayItems;
