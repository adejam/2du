import getItems from './getitems';
import addItemToUi from './additemtoui';

function displayItems(databaseName) {
  const items = getItems(databaseName);
  items.forEach(item => addItemToUi(item, databaseName, 'add'));
}

export default displayItems;
