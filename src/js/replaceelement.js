const replaceElement = (id, inner) => {
  const todoParentDiv = document.querySelector(`#${id}`);
  todoParentDiv.removeChild(todoParentDiv.childNodes[1]);
  const newElement = document.createElement('div');
  newElement.innerHTML = inner;
  todoParentDiv.appendChild(newElement);
};

export default replaceElement;
