const replaceElement = (id, inner) => {
  const todoParentDiv = document.querySelector(`#${id}`);
  // newElement.className = clas;
  // newElement.innerHTML = inner;
  todoParentDiv.removeChild(todoParentDiv.childNodes[1]);
  const newElement = document.createElement('div');
  newElement.innerHTML = inner;
  //
  todoParentDiv.appendChild(newElement);
  // todoParentDiv.replaceChild(inner, todoParentDiv.childNodes[1]);
  // console.log(todoParentDiv.childNodes[1]);
};

export default replaceElement;
