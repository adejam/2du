const completedTodos = todos => {
  return todos.filter(({ status }) => status === true);
};

export default completedTodos;
