import closeModal from './closemodal';
import dynamicValues from './dynamicvalues';
import dynamicId from './dynamicid';
import addItem from './additems';
import getItems from './getitems';

function create(e) {
  e.preventDefault();
  const values = e.target.querySelectorAll('.values');
  const databaseName = e.target.dataset.formname;
  const item = dynamicValues(dynamicId(databaseName), values);
  addItem(item, databaseName);
  // addBookToList(book);
  e.target.reset();
  closeModal(e.target);
}



export default create;
