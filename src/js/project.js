import closeModal from './closemodal';
import dynamicValues from './dynamicvalues';
import dynamicId from './dynamicid';
import addItem from './additems';
import addItemToUi from './additemtoui';

const create = e => {
  e.preventDefault();
  const { target } = e;
  const values = target.querySelectorAll('.values');
  const databaseName = target.dataset.databasename;
  const formType = target.dataset.formtype;
  const item = dynamicValues(dynamicId(databaseName), values);
  addItem(item, databaseName);
  addItemToUi(item, databaseName, formType);
  target.reset();
  closeModal(target);
};

export default create;
