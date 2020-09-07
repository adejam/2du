const inactiveTodos = todos => {
  return todos.filter(({ dueDate }) => Date.parse(dueDate) < Date.now());
};

export default inactiveTodos;
