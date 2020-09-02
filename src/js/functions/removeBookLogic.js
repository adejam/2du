import getItems from '../storage/getitems';
import setItemToDatabase from '../storage/setItem';

const removeBookLogic = (id, databaseName) => {
  const items = getItems(databaseName);
  let index = -1;

  for (let i = 0; i < items.length; i += 1) {
    index += 1;
    if (items[i].id === id) {
      items.splice(index, 1);
      break;
    }
  }
  setItemToDatabase(databaseName, items);
};

export default removeBookLogic;
