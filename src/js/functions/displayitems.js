import getItems from '../storage/getitems';
import addItemToUi from '../dom/additemtoui';

const displayItems = databaseName => {
  const items = getItems(databaseName);
  items.forEach(item => addItemToUi(item)[databaseName].add());
};

export default displayItems;
