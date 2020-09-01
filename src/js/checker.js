import create from './project';

const checker = e => {
  e.preventDefault();

  const title = document.querySelector('#projectTitle').value.toLowerCase();
  const alert = document.querySelector('#alert');
  if (title === 'all' || title === 'personal' || title === 'work') {
    alert.classList.remove('d-none');
    alert.innerHTML = `Cannot Add ${title} as a project`;
  } else {
    create(e);
  }
};

export default checker;
