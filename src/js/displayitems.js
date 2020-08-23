import getItems from './getitems';
import addItemToUi from './additemtoui';

const displayItems = databaseName => {
  const items = getItems(databaseName);
  items.forEach(item => addItemToUi(item, databaseName, 'add'));
};

export default displayItems;
