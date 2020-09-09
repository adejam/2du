const getItemToSearch = (value, todos) => {
  const searchKey = value.toLowerCase();

  return todos.filter(({ title }) => title.toLowerCase().indexOf(searchKey) !== -1);
};

export default getItemToSearch;
