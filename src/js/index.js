import create from './functions/project';
import displayItems from './functions/displayitems';
import removeBookOrChangeStatus from './dom/removebookorchangestatus';
import filterTodo from './functions/filter';
import checker from './dom/checker';

const projectForm = document.querySelector('#projectForm');
const todoForm = document.querySelector('#todoForm');
const todoRow = document.querySelector('#todoRow');
const projectRow = document.querySelector('#projectRow');
todoRow.addEventListener('click', removeBookOrChangeStatus);
projectForm.addEventListener('submit', checker);
todoForm.addEventListener('submit', create);
projectRow.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', displayItems('todo'));
document.addEventListener('DOMContentLoaded', displayItems('project'));
