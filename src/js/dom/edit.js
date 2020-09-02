import closeModal from './closemodal';
import editLogic from '../functions/editLogic';

const editTodo = e => {
  e.preventDefault();
  const form = e.target.parentElement.parentElement;
  const databaseName = form.dataset.databasename;
  const formType = form.dataset.formtype;
  const id = parseInt(form.dataset.databaseid, 10);
  const values = form.querySelectorAll('.values');
  editLogic(values, id, databaseName, formType);
  closeModal(form);
};

export default editTodo;
