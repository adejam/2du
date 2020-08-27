const dynamicValues = (dynamicId, values) => {
  const newItem = {};
  values.forEach(({ dataset: { uid, checker }, checked, value, id }) => {
    if (uid === 'uid') {
      newItem[id] = dynamicId;
    } else if (checker === 'checker') {
      newItem[id] = checked;
    } else {
      newItem[id] = value;
    }
  });
  return newItem;
};

export default dynamicValues;
