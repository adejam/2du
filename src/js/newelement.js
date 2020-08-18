const createNewElement = (row, tag, clas, id, attr, attrValue, inner) => {
  const newElement = document.createElement(tag);
  newElement.className = clas;
  newElement.id = id;
  newElement.setAttribute(attr, attrValue);
  newElement.innerHTML = inner;
  row.appendChild(newElement);
};

export default createNewElement;
