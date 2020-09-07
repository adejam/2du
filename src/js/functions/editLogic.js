const editLogic = (values, id, todos) => {
  const todosList = todos;
  let todo;
  for (let i = 0; i < todosList.length; i += 1) {
    if (todosList[i].id === id) {
      values.forEach(({ dataset: { databasekey }, value }) => {
        todosList[i][databasekey] = value;
      });
      todo = todosList[i];
      break;
    }
  }
  return { todosList, todo };
};

export default editLogic;
