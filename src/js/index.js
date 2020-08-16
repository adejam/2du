import create from './project';
const projectForm = document.querySelector('#projectForm');
const todoForm = document.querySelector('#todoForm');
projectForm.addEventListener('submit', create);
todoForm.addEventListener('submit', create);

