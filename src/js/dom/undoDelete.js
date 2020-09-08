import database from '../storage/database';
import currentStates from '../functions/currentStates';
import restore from './restore';

const undo = document.querySelector('.undo');

const undoDelete = (target, databaseName, todos) => {
  undo.classList.remove('d_none');
  undo.addEventListener('click', restore);
  setTimeout(() => {
    undo.classList.add('d_none');
    if (currentStates.todelete === 'yes') {
      database.setItemToDatabase(databaseName, todos);
    }
  }, 3000);
};
export default undoDelete;
