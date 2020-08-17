const createNewElement = (row, tag, clas, attr, attrValue, inner) => {
  const newElement = document.createElement(tag);
  newElement.className = clas;
  newElement.setAttribute(attr, attrValue);
  newElement.innerHTML = inner;
  row.appendChild(newElement);
};

export default createNewElement;
