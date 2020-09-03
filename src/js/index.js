import create from './functions/project';
import displayItems from './functions/displayitems';
import removeBookOrChangeStatus from './dom/removebookorchangestatus';
import checker from './dom/checker';
import filterValues from './functions/filterValues';

const projectForm = document.querySelector('#projectForm');
const todoForm = document.querySelector('#todoForm');
const todoRow = document.querySelector('#todoRow');
const projectRow = document.querySelectorAll('.projectRow');
todoRow.addEventListener('click', removeBookOrChangeStatus);
projectForm.addEventListener('submit', checker);
todoForm.addEventListener('submit', create);
projectRow.forEach(row => {
  const filter = row.dataset.filtertype;
  row.addEventListener('click', filterValues[filter]);
});

const searchBig = document.querySelector('#searchBig');
const searchSmall = document.querySelector('#searchSmall');
const searchBigType = searchBig.dataset.filtertype;
const searchSmallType = searchSmall.dataset.filtertype;

searchBig.addEventListener('keyup', filterValues[searchBigType]);
searchSmall.addEventListener('keyup', filterValues[searchSmallType]);

document.addEventListener('DOMContentLoaded', displayItems('todo'));
document.addEventListener('DOMContentLoaded', displayItems('project'));
