const changeStatusLogic = (todos, id) => {
  const todosList = todos;
  let changeStatusParams = [];
  for (let i = 0; i < todosList.length; i += 1) {
    if (todosList[i].id === id) {
      if (todosList[i].status === true) {
        todosList[i].status = false;
        changeStatusParams = [false, id];
      } else {
        todosList[i].status = true;
        changeStatusParams = [true, id];
      }
      break;
    }
  }
  return { todosList, changeStatusParams };
};

export default changeStatusLogic;
