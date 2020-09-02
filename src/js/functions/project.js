import closeModal from '../dom/closemodal';
import dynamicValues from './dynamicvalues';
import dynamicId from './dynamicid';
import addItem from './additems';
import addItemToUi from '../dom/additemtoui';

const create = e => {
  e.preventDefault();
  const { target } = e;
  const values = target.querySelectorAll('.values');
  const {
    dataset: { formtype: formType, databasename: databaseName },
  } = target;
  const item = dynamicValues(dynamicId(databaseName), values);
  addItem(item, databaseName);
  addItemToUi(item)[databaseName][formType]();
  target.reset();
  closeModal(target);
};

export default create;
