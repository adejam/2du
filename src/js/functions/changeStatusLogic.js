import changeStatus from '../dom/changestatus';
import getItems from '../storage/getitems';
import setItemToDatabase from '../storage/setItem';

const changeStatusLogic = (databaseName, id) => {
  const items = getItems(databaseName);
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].id === id) {
      if (items[i].status === true) {
        items[i].status = false;
        changeStatus(false, id);
      } else {
        items[i].status = true;
        changeStatus(true, id);
      }
      break;
    }
  }
  setItemToDatabase(databaseName, items);
};

export default changeStatusLogic;
