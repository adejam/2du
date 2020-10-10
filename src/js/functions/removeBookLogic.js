const removeBookLogic = (targetId, todos) => {
  return todos.filter(({ id }) => id !== targetId);
};

export default removeBookLogic;
