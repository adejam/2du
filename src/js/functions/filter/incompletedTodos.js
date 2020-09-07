const incompletedTodos = todos => {
  return todos.filter(({ status }) => status === false);
};

export default incompletedTodos;
