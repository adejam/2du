import create from './project';
import displayItems from './displayitems';
import removeBookOrChangeStatus from './removebookorchangestatus';
import filterTodo from './filter';
import checker from './checker';

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
