const getTodosByPriority = items => {
  const duplicateItems = items.map(item => item);
  const newItems = [];
  const getPriorities = items.map(({ priority }) => priority);
  const sortPriorities = getPriorities.sort((a, b) => a - b);
  sortPriorities.forEach(sorted => {
    let index = -1;
    for (let i = 0; i < duplicateItems.length; i += 1) {
      index += 1;
      if (duplicateItems[i].priority === sorted) {
        newItems.push(duplicateItems[i]);
        duplicateItems.splice(index, 1);
      }
    }
  });
  return newItems;
};

export default getTodosByPriority;
