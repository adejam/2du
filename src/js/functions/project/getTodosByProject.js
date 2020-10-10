const getTodosByProject = (tofilter, todos) => {
  const filteredArrays = todos.filter(({ selectProject }) => selectProject === tofilter);
  return tofilter === 'all' ? todos : filteredArrays;
};

export default getTodosByProject;
