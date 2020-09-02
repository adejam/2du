import addItemToUi from './additemtoui';

const listToShow = items => {
  const todoRow = document.querySelector('#todoRow');
  todoRow.querySelectorAll('*').forEach(row => row.remove());
  items.forEach(item => {
    addItemToUi(item).todo.add();
  });
};

export default listToShow;
