import addItemToUi from '../dom/additemtoui';
import getItems from '../storage/getitems';
import setItemToDatabase from '../storage/setItem';

const editLogic = (values, id, databaseName, formType) => {
  const items = getItems(databaseName);
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].id === id) {
      values.forEach(({ dataset: { databasekey }, value }) => {
        items[i][databasekey] = value;
      });
      addItemToUi(items[i])[databaseName][formType]();
      break;
    }
  }
  setItemToDatabase(databaseName, items);
};

export default editLogic;
