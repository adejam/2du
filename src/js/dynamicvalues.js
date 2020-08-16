function dynamicValues(id, values) {
  const newItem = {};
  values.forEach(result => {
    if (result.dataset.uid === 'uid') {
      newItem[result.id] = id;
    } else if (result.dataset.checker === 'checker') {
      newItem[result.id] = result.checked;
    } else {
      newItem[result.id] = result.value;
    }
  });
  console.log(newItem);
  return newItem;
}

export default dynamicValues;