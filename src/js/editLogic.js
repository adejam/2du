import addItemToUi from './additemtoui';

const editLogic = (items, values, id, databaseName, formType) =>{
	for (let i = 0; i < items.length; i += 1) {
    if (items[i].id === id) {
      values.forEach(({ dataset: { databasekey }, value }) => {
        items[i][databasekey] = value;
      });
      addItemToUi(items[i])[databaseName][formType]();
      break;
    }
  }
}

export default editLogic;