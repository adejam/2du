const removeBookLogic = (id, todos) => {
  let index = -1;

  for (let i = 0; i < todos.length; i += 1) {
    index += 1;
    if (todos[i].id === id) {
      todos.splice(index, 1);
      break;
    }
  }
  return { todos, index };
};

export default removeBookLogic;
