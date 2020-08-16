import create from './project';
import displayItems from './displayitems';

const projectForm = document.querySelector('#projectForm');
const todoForm = document.querySelector('#todoForm');
projectForm.addEventListener('submit', create);
todoForm.addEventListener('submit', create);

document.addEventListener('DOMContentLoaded', displayItems('todo'));
document.addEventListener('DOMContentLoaded', displayItems('project'));
