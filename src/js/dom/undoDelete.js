import database from '../storage/database';
import currentStates from '../functions/currentStates';

const undoDelete = (target, databaseName, todos, undo) => {
  setTimeout(() => {
    undo.classList.add('d_none');
    if (currentStates.todelete === 'yes') {
      database.setItemToDatabase(databaseName, todos);
    }
  }, 3000);
};
export default undoDelete;
