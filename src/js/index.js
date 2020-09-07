import create from './functions/project';
import displayItems from './functions/displayitems';
import removeBookOrChangeStatus from './dom/removebookorchangestatus';
import checker from './dom/checker';
import currentStates from './functions/currentStates';
import search from './functions/search/search';
import projectTodos from './functions/project/projectTodos';
import sortTodos from './functions/sort/sortTodos';
import switchTab from './functions/switchTab';

const projectForm = document.querySelector('#projectForm');
const todoForm = document.querySelector('#todoForm');
const todoRow = document.querySelector('#todoRow');
const projectRow = document.querySelectorAll('.projectRow');
todoRow.addEventListener('click', removeBookOrChangeStatus);
projectForm.addEventListener('submit', checker);
todoForm.addEventListener('submit', create);
const filterSelect = document.querySelector('#filterSelect');
const sortSelect = document.querySelector('#sortSelect');
const checkForFilterClass = ({
  target: {
    classList,
    dataset: { tofilter },
  },
}) => {
  if (classList.contains('filter')) {
    projectTodos[currentStates.filterSelect][currentStates.sortSelect](tofilter);
  }
};
projectRow.forEach(row => {
  row.addEventListener('click', checkForFilterClass);
});

filterSelect.addEventListener('click', switchTab);
sortSelect.addEventListener('change', sortTodos);
const searchbox = document.querySelector('#search');
searchbox.addEventListener('keyup', search);

document.addEventListener('DOMContentLoaded', displayItems('todo'));
document.addEventListener('DOMContentLoaded', displayItems('project'));
