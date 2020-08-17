import create from './project';
import displayItems from './displayitems';
import removeBookOrChangeStatus from './removebookorchangestatus';

const projectForm = document.querySelector('#projectForm');
const todoForm = document.querySelector('#todoForm');
projectForm.addEventListener('submit', create);
todoForm.addEventListener('submit', create);
const todoRow = document.querySelector('#todoRow');
todoRow.addEventListener('click', removeBookOrChangeStatus);
document.addEventListener('DOMContentLoaded', displayItems('todo'));
document.addEventListener('DOMContentLoaded', displayItems('project'));
